const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createLabel } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { inputContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createLabel', () => {
    it('should create a label for an form element', () => {
      const content = inputContent;
      const expectedRender = `
        <label for="firstName">Enter your first name</label>
      `;
      expect(stripSpaces(createLabel(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
