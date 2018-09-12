const express = require('express');
const { validationResult } = require('express-validator/check');
const auth = require('../auth');
const reCAPTCHA = require('recaptcha2');
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

// set up recaptcha2
const recaptcha = new reCAPTCHA({
  siteKey: process.env.RECAPTCHA_SITEKEY,
  secretKey: process.env.RECAPTCHA_SECRET
});

/* GET home page. */
router.get('/', auth, (req, res) => {
  projectController.getIndexFromContentful().then(indexContent => {
    const { pageTitle, headerCopy, descriptionHeader, description } = indexContent[0].fields;
    res.render('index', {
      ...index,
      pageTitle,
      headerCopy,
      descriptionHeader,
      description,
      helpers: {
        markdownify: helpers.markdownify
      }
    });
  });
});

/* GET /apply. */
router.get('/apply', auth, (req, res) => {
  Promise.all([
    projectController.getProjectsList(),
    projectController.getValidations(),
    projectController.getExamplesFromLearningModules()
  ])
    .then(contentfulValues => {
      const [projectsList, validations, learningModuleExamples] = contentfulValues;
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
        learningModuleExamples
      });
    })
    .catch(err => {
      console.log(err);
    });
});

// instantiate variables with contentful form data and submitted fields
let projectsList;
let validations;
let learningModuleExamples;
/* POST /apply. */
router.post('/apply', auth, validateProjectFields, (req, res) => {
  const project = new Project(req.body);
  // server side validations
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    Promise.all([
      projectController.getProjectsList(),
      projectController.getValidations(),
      projectController.getExamplesFromLearningModules()
    ])
      .then(contentfulValues => {
        [projectsList, validations, learningModuleExamples] = contentfulValues;
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
          learningModuleExamples,
          project,
          errors: errors.array()
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    recaptcha
      .validateRequest(req)
      .then(() => {
        // validated and secure
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
      })
      .catch(errorCodes => {
        const recaptchaError = [
          {
            location: 'body',
            param: 'g-recaptcha-response',
            value: undefined,
            msg: 'Please verify you are not a robot.'
          }
        ];
        // invalid, re-render form
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
          learningModuleExamples,
          project,
          errors: recaptchaError
        });
      });
  }
});

/* GET /confirmation. */
router.get('/confirmation', auth, (req, res) => {
  res.render('confirmation', { title: 'Confirmation', message: 'Your application has been received.' });
});

module.exports = router;
