const { assert, expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createBooleanDropdown } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { booleanDropdownContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createBooleanDropdown', () => {
    it('should render dropdown options with "true" and "false" values with default selection "true" when selection is undefined', () => {
      const selection = undefined;
      const content = booleanDropdownContent;
      content.hash.selection = selection;
      const expectedRender = `
        <div class="select">
          <select id="LoremIpsum" type="text" name="LoremIpsum" data-target="LoremIpsum">
          <option value="true" selected="selected">Yes</option>
          <option value="false">No</option>
          </select>
        </div>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createBooleanDropdown(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should render dropdown options with "true" and "false" values with default selection "true"', () => {
      const selection = 'true';
      const content = booleanDropdownContent;
      content.hash.selection = selection;
      const expectedRender = `
        <div class="select">
          <select id="LoremIpsum" type="text" name="LoremIpsum" data-target="LoremIpsum">
          <option value="true" selected="selected">Yes</option>
          <option value="false">No</option>
          </select>
        </div>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createBooleanDropdown(content))).to.deep.equal(stripSpaces(expectedRender));
    });

    it('should render dropdown with specified selected option', () => {
      const selection = 'false';
      const content = booleanDropdownContent;
      content.hash.selection = selection;

      const expectedRender = `
        <div class="select">
          <select id="LoremIpsum" type="text" name="LoremIpsum" data-target="LoremIpsum">
          <option value="true">Yes</option>
          <option value="false" selected="selected">No</option>
          </select>
        </div>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createBooleanDropdown(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
