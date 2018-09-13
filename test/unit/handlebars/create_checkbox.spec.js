const { assert, expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createCheckbox } = helpers;

const stripSpaces = str => {
  return str.replace(/\s+/g, '');
};
const { checkboxContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createCheckbox', () => {
    it('should create default checkbox field with nothing checked', () => {
      const checked = undefined;
      const content = checkboxContent;
      content.hash.checked = checked;

      const expectedRender = `
      <div class="checkbox">
        <input
          type="checkbox"
          id="${content.hash.formValues.contentfulFieldName}"
          name="${content.hash.formValues.contentfulFieldName}"
        />
        <label class="single_checkbox_label" for="${content.hash.formValues.contentfulFieldName}">${
        content.hash.formValues.title
      }</label>
        <div class="instructions">
        </div>
      </div>
      `;
      expect(stripSpaces(createCheckbox(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should create checked checkbox field', () => {
      const checked = 'on';
      const content = checkboxContent;
      content.hash.checked = checked;

      const expectedRender = `
      <div class="checkbox">
        <input
          type="checkbox"
          id="${content.hash.formValues.contentfulFieldName}"
          name="${content.hash.formValues.contentfulFieldName}"
          checked=checked
        />
        <label class="single_checkbox_label" for="${content.hash.formValues.contentfulFieldName}">${
        content.hash.formValues.title
      }</label>
        <div class="instructions">
        </div>
      </div>
      `;
      expect(stripSpaces(createCheckbox(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
