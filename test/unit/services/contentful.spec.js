const dotenv = require('dotenv');

dotenv.config();

const sinon = require('sinon');

const { expect } = require('chai');

const {
  // getFormValuesFromContentful,
  getFormOptions,
  getExamplesFromData
  // getExamplesFromLearningModules,
  // getIndexFromContentful,
  // getLearningModulesFromContentful,
  // getProjectsList,
  // getValidationDropdownItems,
  // getValidationCheckboxItems,
  // getValidationsFromContentful,
  // getValidations,
  // submitFormToContentful
} = require('../../../services/contentful');

const contentfulValues = require('../../fixtures/services_contentful_values');
const learningModules = require('../../fixtures/learning_modules');

describe('Services: Contentful', () => {
  it('getFormOptions should return an object with a given error property and value', () => {
    const error = [{ location: 'body', param: 'responsiblePartyType', msg: 'Responsible Party Type is required' }];
    const formValues = getFormOptions(contentfulValues, error);
    expect(formValues.errors).to.equal(error);
  });
  it('getFormOptions should return an object with a given project property and value', () => {
    const error = [{ location: 'body', param: 'responsiblePartyType', msg: 'Responsible Party Type is required' }];
    const project = {
      responsibleParty: 'Company A'
    };
    const formValues = getFormOptions(contentfulValues, error, project);
    expect(formValues.errors).to.equal(error);
    expect(formValues.project).to.equal(project);
  });

  it('getExamplesFromData pulls data from contentful learning module', () => {
    const contentfulExamples = getExamplesFromData(learningModules);
    expect(Object.keys(contentfulExamples)).to.deep.equal([
      'softwareExamples',
      'hardwareExamples',
      'documentationExamples'
    ]);
  });
});
