const contentfulDelivery = require('contentful');
const contentfulManagement = require('contentful-management');

const contentfulDeliveryApiKey = process.env.OSHWA_CONTENTFUL_DELIVERY_KEY;

const spaceID = process.env.OSHWA_CONTENTFUL_SPACE_ID;
const environmentID = process.env.OSHWA_CONTENTFUL_ENVIRONMENT_ID;
const contentModelType = 'project';

const contentfulClient = contentfulManagement.createClient({
  accessToken: process.env.OSHWA_CONTENTFUL_MANAGEMENT_KEY
});

const contentfulDeliveryClient = contentfulDelivery.createClient({
  space: spaceID,
  accessToken: contentfulDeliveryApiKey,
  environment: process.env.OSHWA_CONTENTFUL_ENVIRONMENT_ID
});

const getValidationDropdownItems = (contentType, id) =>
  contentType.fields.filter(item => item.id === id)[0].validations[0].in;
const getValidationCheckboxItems = (contentType, id) =>
  contentType.fields.filter(item => item.id === id)[0].items.validations[0].in;

const getProjectsList = () =>
  contentfulDeliveryClient
    .getEntries({
      content_type: 'project',
      select: ['fields.oshwaUid', 'fields.responsibleParty', 'fields.projectName']
    })
    .then(response => response.items)
    .catch(console.error);

const getIndexFromContentful = () =>
  contentfulDeliveryClient
    .getEntries({
      content_type: 'certificationPage'
    })
    .then(response => response.items)
    .catch(console.error);

const getExamplesFromLearningModules = () =>
  contentfulDeliveryClient
    .getEntries({ content_type: 'learningModule', select: ['fields.moduleTitle', 'fields.examples'], include: 2 })
    .then(response => {
      const examples = {};
      const softwareExamples = response.items.filter(item => item.fields.moduleTitle === 'Software');
      examples.softwareExamples = softwareExamples[0].fields.examples;
      const hardwareExamples = response.items.filter(item => item.fields.moduleTitle === 'Hardware');
      examples.hardwareExamples = hardwareExamples[0].fields.examples;
      const documentationExamples = response.items.filter(item => item.fields.moduleTitle === 'Documentation');
      examples.documentationExamples = documentationExamples[0].fields.examples;
      return examples;
    })
    .catch(console.error);

const getValidations = () =>
  contentfulClient
    .getSpace(spaceID)
    .then(space => space.getEnvironment(environmentID))
    .then(environment =>
      environment.getContentType(contentModelType).then(contentType => {
        const countryOptions = getValidationDropdownItems(contentType, 'country');
        const responsiblePartyTypeOptions = getValidationDropdownItems(contentType, 'responsiblePartyType');
        const primaryProjectTypes = getValidationDropdownItems(contentType, 'primaryType');
        const additionalProjectTypes = getValidationCheckboxItems(contentType, 'additionalType');
        const hardwareLicenses = getValidationDropdownItems(contentType, 'hardwareLicense');
        const softwareLicenses = getValidationDropdownItems(contentType, 'softwareLicense');
        const documentationLicenses = getValidationDropdownItems(contentType, 'documentationLicense');
        return [
          {
            countryOptions,
            responsiblePartyTypeOptions,
            primaryProjectTypes,
            additionalProjectTypes,
            hardwareLicenses,
            softwareLicenses,
            documentationLicenses
          }
        ];
      })
    )
    .catch(console.error);

const submitFormToContentful = fields =>
  contentfulClient
    .getSpace(spaceID)
    .then(space => space.getEnvironment(environmentID))
    .then(environment => environment.createEntry(contentModelType, { fields }))
    .catch(console.error);

module.exports = {
  getValidations,
  submitFormToContentful,
  getIndexFromContentful,
  getProjectsList,
  getExamplesFromLearningModules
};
