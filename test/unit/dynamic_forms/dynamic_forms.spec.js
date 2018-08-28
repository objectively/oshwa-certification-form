const fs = require('fs');
const path = require('path');

const templateHTML = fs.readFileSync(path.join(__dirname, 'dynamic_forms.test.html')).toString();

const { JSDOM } = require('jsdom');

const { window } = new JSDOM(templateHTML);

const { document } = window;

const { assert } = require('chai');

global.$ = require('jquery')(window);

const DynamicForms = require('../../../client/dynamic_forms.js');

describe('DynamicForms', () => {
  const { body } = document;
  let formFieldsCount = document.querySelectorAll('.form-field-wrapper').length;
  const addFormFieldButton = document.querySelector('.js-add-url-inputs-field > .material-icons');
  const firstDeleteButton = document.querySelector('.js-remove-field');

  beforeEach(() => {
    body.innerHTML = templateHTML;
    DynamicForms.init();
  });
  afterEach(() => {
    body.innerHTML = '';
  });

  xit('should add a url create form field', () => {
    formFieldsCount = document.querySelectorAll('.form-field-wrapper').length;
    assert.equal(formFieldsCount, 1);
    addFormFieldButton.click();
    assert.equal(formFieldsCount, 2);
  });
  xit('should delete a url create form field', () => {
    assert.equal(formFieldsCount, 1);
    firstDeleteButton.click();
    assert.equal(formFieldsCount, 0);
  });
  xit('should add a url create form field even if all url fields were deleted', () => {
    assert.equal(formFieldsCount, 1);
    firstDeleteButton.click();
    assert.equal(formFieldsCount, 0);
    addFormFieldButton.click();
    assert.equal(formFieldsCount, 1);
  });
  xit('should open explanation field conditionally on dropdown select', () => {});
  xit('should hide explanation field conditionally on dropdown select', () => {});
});
