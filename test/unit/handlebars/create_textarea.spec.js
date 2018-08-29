const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createTextArea } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { textAreaContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createTextArea', () => {
    it('should render a textarea', () => {
      const content = textAreaContent;
      const expectedRender = `
        <textarea id="projectDescription"
        type="text"
        name="projectDescription"
        placeholder="Provide a brief description of your project (500 characters)"
        ></textarea>
        <div class="textarea-message"></div>
        <div class="instructions">
          Please limit your response to 500 characters
        </div>
      `;
      expect(stripSpaces(createTextArea(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should rerender a textarea with input if provided', () => {
      const content = textAreaContent;
      const inputValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, enim!';
      content.hash.inputValue = inputValue;
      const expectedRender = `
        <textarea id="projectDescription"
        type="text"
        name="projectDescription"
        placeholder="Provide a brief description of your project (500 characters)"
        >${inputValue}</textarea>
        <div class="textarea-message"></div>
        <div class="instructions">
          Please limit your response to 500 characters
        </div>
      `;
      expect(stripSpaces(createTextArea(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
