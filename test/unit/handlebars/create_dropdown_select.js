const { assert, expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createDropdownSelect } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { dropdownSelectContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createDropdownSelect', () => {
    it('should render default dropdown select', () => {
      const content = dropdownSelectContent;
      const expectedRender = `
        <div class="select">
          <select id="hardwareLicense" type="text" name="hardwareLicense">
            <option value="" disabled selected>Select a license</option>

        <option value="OptionOne" >OptionOne</option>

        <option value="OptionTwo" >OptionTwo</option>

        <option value="OptionThree" >OptionThree</option>

        <option value="OptionFour" >OptionFour</option>

          </select>
        </div>
        <div class="instructions">
          If your license is not listed, choose "Other"
        </div>
      `;
      expect(stripSpaces(createDropdownSelect(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should render with dropdown option selected if given', () => {
      const content = dropdownSelectContent;
      const selection = 'OptionOne';
      content.hash.selection = selection;
      const expectedRender = `
        <div class="select">
          <select id="hardwareLicense" type="text" name="hardwareLicense">
            <option value="" disabled selected>Select a license</option>

        <option value="OptionOne" selected>OptionOne</option>

        <option value="OptionTwo" >OptionTwo</option>

        <option value="OptionThree" >OptionThree</option>

        <option value="OptionFour" >OptionFour</option>

          </select>
        </div>
        <div class="instructions">
          If your license is not listed, choose "Other"
        </div>
      `;
      expect(stripSpaces(createDropdownSelect(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
