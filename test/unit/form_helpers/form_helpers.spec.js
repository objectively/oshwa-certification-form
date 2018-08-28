const { assert, expect } = require('chai');

const helpers = require('../../../helpers/form_helpers.js');

const {
  isAddUrlField,
  isArrayField,
  isBoolean,
  isBooleanSelect,
  isCheckboxArray,
  isCheckboxObject,
  isReferenceField,
  returnArrayFromTextField,
  returnArrayFromCheckbox,
  returnBooleanFromCheckbox,
  returnBooleanFromSelect,
  returnCertificationObjectFromCheckbox,
  returnReferences,
  returnUrlToObj
} = helpers;

describe('FormHelpers', () => {
  // isAddUrlField
  it('isAddUrlField indicates form field names matching "citations[]"', () => {
    assert.equal(isAddUrlField('citations[1]'), true);
    assert.equal(isAddUrlField('citations[]'), false);
    assert.equal(isAddUrlField('myfield'), false);
  });

  // isArrayField
  it('isArrayField returns whether field is an array', () => {
    expect(isArrayField('projectKeywords')).to.equal(true);
  });

  // isBoolean
  it('isBoolean returns whether field is boolean', () => {
    expect(isBoolean('availableFileFormat')).to.equal(true);
  });

  // isBooleanSelect
  it('isBooleanSelect returns whether field is boolean select', () => {
    expect(isBooleanSelect('noCommercialRestriction')).to.equal(true);
  });

  // isCheckboxArray
  it('isCheckboxArray returns whether field is checkbox array', () => {
    expect(isCheckboxArray('additionalType')).to.equal(true);
  });

  // isCheckboxObject
  it('isCheckboxObject returns whether field is checkbox object', () => {
    expect(isCheckboxObject('certificationMarkTerms')).to.equal(true);
  });

  // isReferenceField
  it('isReferenceField returns whether field is reference field', () => {
    expect(isReferenceField('previousVersions')).to.equal(true);
  });

  // returnArrayFromCheckbox
  it('returnArrayFromCheckbox returns an array from single checkbox value', () => {
    const checkboxValue = returnArrayFromCheckbox('one');
    assert.equal(Array.isArray(checkboxValue), true);
  });

  it('returnArrayFromCheckbox returns an array from multiple checkbox values', () => {
    const checkboxValues = returnArrayFromCheckbox(['one', 'two']);
    assert.equal(Array.isArray(checkboxValues), true);
  });

  // returnArrayFromTextField
  it('returnArrayFromTextField returns an array of text values from a list of comma separated values', () => {
    const keywords = returnArrayFromTextField('one, two, three');
    assert.equal(Array.isArray(keywords), true);
    assert.equal(keywords.length, 3);
  });

  // returnBooleanFromCheckbox
  it('returnBooleanFromCheckbox returns an boolean value', () => {
    const trueCheckboxValue = returnBooleanFromCheckbox('true');
    const falseCheckboxValue = returnBooleanFromCheckbox('');

    assert.equal(typeof trueCheckboxValue, 'boolean');
    assert.equal(trueCheckboxValue, true);
    assert.equal(typeof falseCheckboxValue, 'boolean');
    assert.equal(falseCheckboxValue, false);
  });

  // returnBooleanFromSelect
  it('returnBooleanFromSelect returns a boolean value', () => {
    const trueSelectValue = returnBooleanFromSelect('true');
    const falseSelectValue = returnBooleanFromSelect('false');
    assert.equal(typeof trueSelectValue, 'boolean');
    assert.equal(trueSelectValue, true);
    assert.equal(typeof falseSelectValue, 'boolean');
    assert.equal(falseSelectValue, false);
  });

  // returnCertificationObjectFromCheckbox
  it('returnCertificationObjectFromCheckbox returns a properly formatted object', () => {
    const values = ['accurateContactInformation'];
    const termsAgreed = {
      accurateContactInformation: {
        agreement: true
      },
      complianceWithOfficialCertificationGuidelines: {
        agreement: false
      },
      oshwaCertificationMark: {
        agreement: false
      },
      responsibility: {
        agreement: false
      },
      violationsEnforcement: {
        agreement: false
      }
    };
    expect(returnCertificationObjectFromCheckbox(values)).to.deep.equal(termsAgreed);
  });

  // returnReferences
  it('returnReferences returns an array of references when given a string', () => {
    const hasEntryReference = returnReferences('123');
    assert.equal(Array.isArray(hasEntryReference), true);
    assert.equal(hasEntryReference[0].sys.id, '123');
  });

  it('returnReferences returns an array of references when given an array of ids', () => {
    const hasEntryReference = returnReferences(['123', '456']);
    assert.equal(Array.isArray(hasEntryReference), true);
    assert.equal(hasEntryReference[0].sys.id, '123');
    assert.equal(hasEntryReference[1].sys.id, '456');
  });

  it('returnReferences returns an empty array of when no argument is given', () => {
    const hasEntryReference = returnReferences();
    assert.equal(Array.isArray(hasEntryReference), true);
    expect(hasEntryReference).to.deep.equal([]);
  });

  // returnUrlToObj
  it('returnUrlToObj returns a json object from an array of titles and urls', () => {
    const urlsArray = ['titleOne', 'urlOne', 'titleTwo', 'urlTwo'];
    const urlsJson = returnUrlToObj(urlsArray);
    assert.equal(urlsJson[0].title, 'titleOne');
    assert.equal(urlsJson[0].url, 'urlOne');
    assert.equal(urlsJson[1].title, 'titleTwo');
    assert.equal(urlsJson[1].url, 'urlTwo');
  });

  it('returnUrlToObj returns an empty array if no urls are given', () => {
    const urlsArray = ['', ''];
    const urlsJson = returnUrlToObj(urlsArray);
    expect(urlsJson).to.deep.equal([]);
  });
});
