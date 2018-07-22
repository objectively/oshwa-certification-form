let fs = require('fs');
let path = require('path');
let assert = require('chai').assert;

let helpers = require('../../../helpers/form_helpers.js');
let formData = require('./form_helpers.test.json');

describe('FormHelpers', () => {
  const { returnUrlToObj } = helpers;

  it('returnUrlToObj returns a json object from an array of titles and urls', function() {
    const urlsArray = ['titleOne', 'urlOne', 'titleTwo', 'urlTwo'];
    const urlsJson = returnUrlToObj(urlsArray);
    assert.equal(urlsJson[0].title, 'titleOne');
    assert.equal(urlsJson[0].url, 'urlOne');
    assert.equal(urlsJson[1].title, 'titleTwo');
    assert.equal(urlsJson[1].url, 'urlTwo');
  });

  it('returnReferences returns an array of references', function() {
    const { returnReferences } = helpers;
    const hasEntryReference = returnReferences('123');
    assert.equal(Array.isArray(returnReferences()), true);
    assert.equal(hasEntryReference[0].sys.id, '123');
  });

  it('returnArrayFromTextField returns an array of text values from a list of comma separated values', function() {
    const { returnArrayFromTextField } = helpers;
    const keywords = returnArrayFromTextField('one, two, three');
    assert.equal(Array.isArray(keywords), true);
    assert.equal(keywords.length, 3);
  });

  it('returnArrayFromCheckbox returns an array from single checkbox value', function() {
    const { returnArrayFromCheckbox } = helpers;
    const checkboxValue = returnArrayFromCheckbox('one');
    assert.equal(Array.isArray(checkboxValue), true);
  });

  it('returnArrayFromCheckbox returns an array from multiple checkbox values', function() {
    const { returnArrayFromCheckbox } = helpers;
    const checkboxValues = returnArrayFromCheckbox(['one', 'two']);
    assert.equal(Array.isArray(checkboxValues), true);
  });

  it('returnBooleanFromCheckbox returns an boolean value', function() {
    const { returnBooleanFromCheckbox } = helpers;
    const trueCheckboxValue = returnBooleanFromCheckbox('true');
    const falseCheckboxValue = returnBooleanFromCheckbox('');

    assert.equal(typeof trueCheckboxValue, 'boolean');
    assert.equal(trueCheckboxValue, true);
    assert.equal(typeof falseCheckboxValue, 'boolean');
    assert.equal(falseCheckboxValue, false);
  });

  it('returnBooleanFromSelect returns an boolean value', function() {
    const { returnBooleanFromSelect } = helpers;
    const trueSelectValue = returnBooleanFromSelect('true');
    const falseSelectValue = returnBooleanFromSelect('false');

    assert.equal(typeof trueSelectValue, 'boolean');
    assert.equal(trueSelectValue, true);
    assert.equal(typeof falseSelectValue, 'boolean');
    assert.equal(falseSelectValue, false);
  });
});
