const contentfulManagement = require('contentful-management');

const spaceID = process.env.OSHWA_CONTENTFUL_SPACE_ID;
const environmentID = process.env.OSHWA_CONTENTFUL_ENVIRONMENT_ID;
const contentModelType = 'project';

const contentfulClient = contentfulManagement.createClient({
  accessToken: process.env.OSHWA_CONTENTFUL_MANAGEMENT_KEY
});

const getValidationDropdownItems = (contentType, id) =>
  contentType.fields.filter(item => item.id === id)[0].validations[0].in;
const getValidationCheckboxItems = (contentType, id) =>
  contentType.fields.filter(item => item.id === id)[0].items.validations[0].in;

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
        const certificationMarkChecklist = getValidationCheckboxItems(contentType, 'certificationmarkTerms');
        return [
          {
            countryOptions,
            responsiblePartyTypeOptions,
            primaryProjectTypes,
            additionalProjectTypes,
            hardwareLicenses,
            softwareLicenses,
            documentationLicenses,
            certificationMarkChecklist
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
  submitFormToContentful
};
