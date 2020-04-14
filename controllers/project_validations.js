const { check } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const returnBindingPartyDependency = (value, req) => {
  if (req.body.responsiblePartyType !== 'Individual' && value.length <= 0) {
    return false;
  } else if (req.body.responsiblePartyType !== 'Individual' && value.length > 0) {
    return true;
  }
  return true;
};

const returnExplanationDependency = (value, req, dependentField) => {
  // boolean dropdowns send a string
  if (req.body[dependentField] === 'false' && value.length <= 0) {
    return false;
  }
  return true;
};

const returnCertificationExplanationDependency = (value, req) => {
  const certificationMarkTermsCount = 5;
  const checkedTerms = req.body.certificationMarkTerms;
  if (value <= 0) {
    switch (typeof checkedTerms) {
      case 'object':
        if (checkedTerms.length >= certificationMarkTermsCount) {
          return true;
        }
        return false;
      default:
        // if undefined or string
        return false;
    }
  }
  return true;
};
/* istanbul ignore next */
const validateProjectFields = [
  check('oshwaUid')
    .trim()
    .blacklist("><"),
  check('responsiblePartyType')
    .isLength({ min: 1 })
    .withMessage('Responsible Party Type is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('responsibleParty')
    .isLength({ min: 1 })
    .withMessage('Responsible Party is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('bindingParty')
    .custom((value, { req }) => {
      return returnBindingPartyDependency(value, req);
    })
    .withMessage('Name of the binding party is required if responsible party type is not an individual')
    .trim()
    .blacklist("><"),
  check('country')
    .isLength({ min: 1 })
    .withMessage('Country is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('streetAddress1')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('streetAddress2')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('city')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('state')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('postalCode')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('privateContact')
    .optional({ checkFalsy: true })
    .isEmail()
    // .normalizeEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('publicContact')
    .optional({ checkFalsy: true })
    .isEmail()
    // .normalizeEmail()
    .withMessage('Please enter a valid email address')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('projectName')
    .isLength({ min: 1 })
    .withMessage('Project name is required')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('projectWebsite')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim(),
  check('projectVersion')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('previousVersions')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim()
    .blacklist("><"),
  check('projectDescription')
    .trim()
    .blacklist("><"),
  check('primaryType')
    .isLength({ min: 1 })
    .withMessage(
      'Primary Type: You must select a project type. If your project doesn\'t fall into any of these types, select "Other".'
    )
    .trim()
    .blacklist("><"),
  check('additionalType'),
  check('projectKeywords')
    .trim()
    .blacklist("><"),
  check('documentationUrl')
    .isLength({ max: 256 })
    .withMessage('Maximum length is 256 characters')
    .trim(),
  check('availableFileFormat')
    .trim()
    .blacklist("><"),
  check('citations')
    .trim()
    .blacklist("><"),
  check('hardwareLicense')
    .isLength({ min: 1 })
    .withMessage('Hardware license: You must select a license. If your license is not listed, select "Other"')
    .trim()
    .blacklist("><"),
  check('softwareLicense')
    .isLength({ min: 1 })
    .withMessage(
      'Software license: You must select a license. If your license is not listed, select "Other". If your project doesn\'t use software, select "No software".'
    )
    .trim()
    .blacklist("><"),
  check('documentationLicense')
    .isLength({ min: 1 })
    .withMessage('Documentation License: You must select a license. If your license is not listed, select "Other"')
    .trim()
    .blacklist("><"),
  check('noCommercialRestriction')
    .trim()
    .blacklist("><"),
  check('explanationNcr')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'noCommercialRestriction');
    })
    .withMessage('noCommercialRestriction: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('noDocumentationRestriction')
    .trim()
    .blacklist("><"),
  check('explanationNdr')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'noDocumentationRestriction');
    })
    .withMessage('noDocumentationRestriction: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('openHardwareComponents')
    .trim()
    .blacklist("><"),
  check('explanationOhwc')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'openHardwareComponents');
    })
    .withMessage('openHardwareComponents: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('creatorContribution')
    .trim()
    .blacklist("><"),
  check('explanationCcr')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'creatorContribution');
    })
    .withMessage('creatorContribution: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('noUseRestriction')
    .trim()
    .blacklist("><"),
  check('explanationNur')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'noUseRestriction');
    })
    .withMessage('noUseRestriction: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('redistributedWork')
    .trim()
    .blacklist("><"),
  check('explanationRwr')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'redistributedWork');
    })
    .withMessage('redistributedWork: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('noSpecificProduct')
    .trim()
    .blacklist("><"),
  check('explanationNsp')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'noSpecificProduct');
    })
    .withMessage('noSpecificProduct: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('noComponentRestriction')
    .trim()
    .blacklist("><"),
  check('explanationNor')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'noComponentRestriction');
    })
    .withMessage('noComponentRestriction: This explanation is required if you answered no.')
    .trim()
    .blacklist("><"),
  check('technologyNeutral')
    .trim()
    .blacklist("><"),
  check('explanationTn')
    .custom((value, { req }) => {
      return returnExplanationDependency(value, req, 'technologyNeutral');
    })
    .withMessage('noComponentRestriction: This explanation is required if you answered no.'),
  check('certificationMarkTerms'),
  check('explanationCertificationTerms')
    .custom((value, { req }) => {
      return returnCertificationExplanationDependency(value, req);
    })
    .withMessage(
      'certificationMarkTerms: This explanation is required if you did not agree to one or more of the certification mark terms.'
    )
    .trim()
    .blacklist("><"),
  check('relationship')
    .trim()
    .blacklist("><"),
  check('agreementTerms')
    .isLength({ min: 1 })
    .withMessage('You must agree to the terms of the OSHWA Open Source Hardware Certification Mark License Agreement.'),
  check('agreementTerms')
    .trim()
    .blacklist("><"),
  check('parentName')
    .trim()
    .blacklist("><"),
  check('g-recaptcha-response')
    .isLength({ min: 1 })
    .withMessage('Please verify you are not a robot.')
];

module.exports = {
  validateProjectFields,
  returnBindingPartyDependency,
  returnExplanationDependency,
  returnCertificationExplanationDependency
};
