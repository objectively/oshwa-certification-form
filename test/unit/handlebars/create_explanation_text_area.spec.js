const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createExplanationTextArea } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { explanationTextAreaContent } = require('../../fixtures/form_values');

describe('handlebars Helpers', () => {
  describe('createExplanationTextArea', () => {
    it('should render an explanation text area', () => {
      const content = explanationTextAreaContent;
      const expectedRender = `
        <div class="row explanation-field hide" data-value="dependentFieldName">
          <div class="columns large-3 small-12">
            <label for="explanation">You answered no, please explain why</label>
          </div>
          <div class="columns">
            <textarea id="explanation" type="text" name="explanation" placeholder="Provide a brief explanation"></textarea>
          <div class="textarea-message"></div>

          </div>
        </div>
      `;
      expect(stripSpaces(createExplanationTextArea(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should rerender an explanation text area with value if given', () => {
      const content = explanationTextAreaContent;
      const inputValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nostrum?';
      content.hash.inputValue = inputValue;
      const expectedRender = `
        <div class="row explanation-field hide" data-value="dependentFieldName">
          <div class="columns large-3 small-12">
            <label for="explanation">You answered no, please explain why</label>
          </div>
          <div class="columns">
            <textarea id="explanation" type="text" name="explanation" placeholder="Provide a brief explanation">${
              inputValue
            }</textarea>
          <div class="textarea-message"></div>
          </div>
        </div>
      `;
      expect(stripSpaces(createExplanationTextArea(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should rerender with a required explanation text area', () => {
      const content = explanationTextAreaContent;
      content.hash.hide = false;
      const inputValue = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, nostrum?';
      content.hash.inputValue = inputValue;
      const expectedRender = `
        <div class="row explanation-field" data-value="dependentFieldName">
          <div class="columns large-3 small-12">
            <label for="explanation">You answered no, please explain why</label>
          </div>
          <div class="columns">
            <textarea id="explanation" type="text" name="explanation" placeholder="Provide a brief explanation">${
              inputValue
            }</textarea>
          <div class="textarea-message"></div>
          </div>
        </div>
      `;
      expect(stripSpaces(createExplanationTextArea(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
