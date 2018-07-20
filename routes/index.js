const express = require('express');

const router = express.Router();

const siteMetadata = require('../config/site_metadata');

const helpers = require('../helpers/handlebars');

const { index, apply } = siteMetadata;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { ...index });
});

const sectionOne = require('../config/form_fields/section-1-questions.json');
const sectionTwo = require('../config/form_fields/section-2-questions.json');
const sectionThree = require('../config/form_fields/section-3-questions.json');
const sectionFour = require('../config/form_fields/section-4-questions.json');

const {
  countryOptions,
  responsiblePartyTypeOptions,
  projectTypes,
  hardwareLicenses,
  softwareLicenses,
  documentationLicenses,
  certificationMarkChecklist
} = require('../config/seed_data');

/* GET /apply. */
router.get('/apply', (req, res, next) => {
  res.render('apply', {
    ...apply,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    helpers: {
      ...helpers
    },
    countryOptions,
    responsiblePartyTypeOptions,
    projectTypes,
    hardwareLicenses,
    softwareLicenses,
    documentationLicenses,
    certificationMarkChecklist
  });
});
module.exports = router;
