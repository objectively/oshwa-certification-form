const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createInput } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { inputContent } = require('../../fixtures/form_values');

describe('Handlebars Helper', () => {
  describe('createInput', () => {
    it('should create a blank input field', () => {
      const content = inputContent;
      const expectedRender = `
        <input type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value=""
        >
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createInput(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should rerender an input field with a specified value', () => {
      const content = inputContent;
      const inputValue = 'Jane';
      content.hash.inputValue = inputValue;
      const expectedRender = `
        <input type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value=${inputValue}
        >
        <div class="instructions">

        </div>
      `;
      expect(stripSpaces(createInput(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
