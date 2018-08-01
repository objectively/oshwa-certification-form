const { check } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const validateProjectFields = [
  check('oshwaUid')
    .trim()
    .escape(),
  check('responsiblePartyType')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('responsibleParty')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('bindingParty')
    .trim()
    .escape(),
  check('country')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('streetAddress1')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('streetAddress2')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('city')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('state')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('postalCode')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('privateContact')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('publicContact')
    // add optional email validation
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('projectName')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('projectWebsite')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('projectVersion')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('previousVersions')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('projectDescription')
    .trim()
    .escape(),
  check('primaryType')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .trim()
    .escape(),
  check('additionalType')
    .trim()
    .escape(),
  check('projectKeywords')
    .trim()
    .escape(),
  check('documentationUrl')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  sanitizeBody('availableFileFormat').toBoolean(),
  check('citations')
    .trim()
    .escape(),
  check('hardwareLicense')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .trim()
    .escape(),
  check('softwareLicense')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .trim()
    .escape(),
  check('documentationLicense')
    .isLength({ min: 1 })
    .withMessage('This field is required')
    .trim()
    .escape(),
  sanitizeBody('noCommercialRestriction').toBoolean(),
  check('explanationNcr')
    .trim()
    .escape(),
  sanitizeBody('noDocumentationRestriction').toBoolean(),
  check('explanationNdr')
    .trim()
    .escape(),
  sanitizeBody('openHardwareComponents').toBoolean(),
  check('explanationOhwc')
    .trim()
    .escape(),
  sanitizeBody('creatorContribution').toBoolean(),
  check('explanationCcr')
    .trim()
    .escape(),
  sanitizeBody('noUseRestriction').toBoolean(),
  check('explanationNur')
    .trim()
    .escape(),
  sanitizeBody('redistributedWork').toBoolean(),
  check('explanationRwr')
    .trim()
    .escape(),
  sanitizeBody('noSpecificProduct').toBoolean(),
  check('explanationNsp')
    .trim()
    .escape(),
  sanitizeBody('noComponentRestriction').toBoolean(),
  check('explanationNor')
    .trim()
    .escape(),
  sanitizeBody('technologyNeutral').toBoolean(),
  check('explanationTn'),
  check('certificationMarkTerms'),
  check('explanationCertificationTerms')
    .trim()
    .escape(),
  check('relationship')
    .trim()
    .escape(),
  sanitizeBody('agreementTerms').toBoolean(),
  check('parentName')
    .trim()
    .escape()
];

module.exports = validateProjectFields;
