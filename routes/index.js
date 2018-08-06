const express = require('express');
const { validationResult } = require('express-validator/check');
const auth = require('../auth');

const router = express.Router();

const Project = require('../models/project');
const projectController = require('../controllers/project_controller');

const validateProjectFields = require('../controllers/project_validations');

const siteMetadata = require('../config/site_metadata');

const helpers = require('../helpers/handlebars');

const { index, apply } = siteMetadata;

const sectionOne = require('../config/form_fields/section-1-questions.json');
const sectionTwo = require('../config/form_fields/section-2-questions.json');
const sectionThree = require('../config/form_fields/section-3-questions.json');
const sectionFour = require('../config/form_fields/section-4-questions.json');

/* GET home page. */
router.get('/', auth, (req, res) => {
  res.render('index', { ...index });
});

/* GET /apply. */
router.get('/apply', auth, (req, res) => {
  Promise.all([projectController.getProjectsList(), projectController.getValidations()])
    .then(contentfulValues => {
      const [projectsList, validations] = contentfulValues;

      res.render('apply', {
        ...apply,
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        helpers: {
          ...helpers
        },
        projectsList,
        ...validations[0]
      });
    })
    .catch(err => {
      console.log(err);
    });
});

/* POST /apply. */
router.post('/apply', auth, validateProjectFields, (req, res) => {
  const project = new Project(req.body);
  // server side validations
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    Promise.all([projectController.getProjectsList(), projectController.getValidations()])
      .then(contentfulValues => {
        const [projectsList, validations] = contentfulValues;
        res.render('apply', {
          ...apply,
          sectionOne,
          sectionTwo,
          sectionThree,
          sectionFour,
          helpers: {
            ...helpers
          },
          projectsList,
          ...validations[0],
          project,
          errors: errors.array()
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    const fields = project.mapFieldsToContentful();

    projectController
      .submitFormToContentful(fields)
      .then(data => {
        if (data.name === 'InvalidEntry') {
          throw new Error('Invalid Entry');
        } else {
          res.redirect('/confirmation');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
});

/* GET /confirmation. */
router.get('/confirmation', auth, (req, res) => {
  res.render('confirmation', { title: 'Confirmation', message: 'Your application has been received.' });
});

module.exports = router;
