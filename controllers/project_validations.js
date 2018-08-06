const { check } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const validateProjectFields = [
  check('oshwaUid')
    .trim()
    .escape(),
  check('responsiblePartyType')
    .isLength({ min: 1 })
    .withMessage('Responsible Party Type is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('responsibleParty')
    .isLength({ min: 1 })
    .withMessage('Responsible Party is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('bindingParty')
    .custom((value, { req }) => {
      if (req.body.responsiblePartyType !== 'Individual' && value.length <= 0) {
        return false;
      } else if (req.body.responsiblePartyType !== 'Individual' && value.length > 0) {
        return true;
      }
      return true;
    })
    .withMessage('Name of the binding party is required if responsible party type is not an individual')
    .trim()
    .escape(),
  check('country')
    .isLength({ min: 1 })
    .withMessage('Country is required')
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
    .optional({ checkFalsy: true })
    .isEmail()
    // .normalizeEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .escape(),
  check('publicContact')
    .optional({ checkFalsy: true })
    .isEmail()
    // .normalizeEmail()
    .withMessage('Please enter a valid email address')
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
    .withMessage('Primary Type is required')
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
    .withMessage('Hardware license is required')
    .trim()
    .escape(),
  check('softwareLicense')
    .isLength({ min: 1 })
    .withMessage('Software license is required')
    .trim()
    .escape(),
  check('documentationLicense')
    .isLength({ min: 1 })
    .withMessage('Documentation License is required')
    .trim()
    .escape(),
  sanitizeBody('noCommercialRestriction').toBoolean(),
  check('explanationNcr')
    .custom((value, { req }) => {
      if (req.body.noCommercialRestriction === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noCommercialRestriction: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('noDocumentationRestriction').toBoolean(),
  check('explanationNdr')
    .custom((value, { req }) => {
      if (req.body.noDocumentationRestriction === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noDocumentationRestriction: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('openHardwareComponents').toBoolean(),
  check('explanationOhwc')
    .custom((value, { req }) => {
      if (req.body.openHardwareComponents === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('openHardwareComponents: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('creatorContribution').toBoolean(),
  check('explanationCcr')
    .custom((value, { req }) => {
      if (req.body.creatorContribution === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('creatorContribution: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('noUseRestriction').toBoolean(),
  check('explanationNur')
    .custom((value, { req }) => {
      if (req.body.noUseRestriction === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noUseRestriction: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('redistributedWork').toBoolean(),
  check('explanationRwr')
    .custom((value, { req }) => {
      if (req.body.redistributedWork === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('redistributedWork: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('noSpecificProduct').toBoolean(),
  check('explanationNsp')
    .custom((value, { req }) => {
      if (req.body.noSpecificProduct === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noSpecificProduct: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('noComponentRestriction').toBoolean(),
  check('explanationNor')
    .custom((value, { req }) => {
      if (req.body.noComponentRestriction === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noComponentRestriction: explanation required if answered no')
    .trim()
    .escape(),
  sanitizeBody('technologyNeutral').toBoolean(),
  check('explanationTn')
    .custom((value, { req }) => {
      if (req.body.noComponentRestriction === false && value.length <= 0) {
        return false;
      }
      return true;
    })
    .withMessage('noComponentRestriction: explanation required if answered no'),
  check('certificationmarkTerms'),
  check('explanationCertificationTerms')
    .custom((value, { req }) => {
      const certificationmarkTermsCount = 5;
      switch (typeof req.body.certificationmarkTerms) {
        case 'string':
          if (value.length <= 0) {
            return false;
          } else {
            return true;
          }
          break;
        case 'object':
          if (req.body.certificationmarkTerms.length < certificationmarkTermsCount && value.length <= 0) {
            return false;
          } else if (req.body.certificationmarkTerms.length < certificationmarkTermsCount && value.length > 0) {
            return true;
          } else if (req.body.certificationmarkTerms.length === certificationmarkTermsCount) {
            return true;
          }
          break;
        default:
          return true;
      }
    })
    .withMessage('certificationmarkTerms: Explanation is required if response is no')
    .trim()
    .escape(),
  check('relationship')
    .trim()
    .escape(),
  check('agreementTerms')
    .isLength({ min: 1 })
    .withMessage('Agreement is required'),
  sanitizeBody('agreementTerms').toBoolean(),
  check('parentName')
    .trim()
    .escape()
];

module.exports = validateProjectFields;
