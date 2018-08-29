const { assert, expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createPreviousVersionsDropdown } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');
const { previousVersionsContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createPreviousVersionsDropdown', () => {
    it('should create a default dropdown select for previous version', () => {
      const content = previousVersionsContent;
      const expectedRender = `
        <div class="select select-previous-versions" >
          <select id="previousVersions" multiple="multiple" class="previousVersions" type="text" name="previousVersions">
            <option></option>
            <option value="100" >US100: Company A - Project A </option>
            <option value="200" >US100: Company B - Project B </option>
          </select>
        </div>
        <label for="select2-search__field">Previous versions</label>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createPreviousVersionsDropdown(content))).to.equal(stripSpaces(expectedRender));
    });
    it('should create a dropdown select for previous version with one selected option', () => {
      const content = previousVersionsContent;
      const selectedProjects = '100';
      content.hash.selectedProjects = selectedProjects;
      const expectedRender = `
        <div class="select select-previous-versions" >
          <select id="previousVersions" multiple="multiple" class="previousVersions" type="text" name="previousVersions">
            <option></option>
            <option value="100" selected>US100: Company A - Project A </option>
            <option value="200" >US100: Company B - Project B </option>
          </select>
        </div>
        <label for="select2-search__field">Previous versions</label>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createPreviousVersionsDropdown(content))).to.equal(stripSpaces(expectedRender));
    });
    it('should create a dropdown select for previous version with multiple selected options', () => {
      const content = previousVersionsContent;
      const selectedProjects = ['100', '200'];
      content.hash.selectedProjects = selectedProjects;
      const expectedRender = `
        <div class="select select-previous-versions" >
          <select id="previousVersions" multiple="multiple" class="previousVersions" type="text" name="previousVersions">
            <option></option>
            <option value="100" selected>US100: Company A - Project A </option>
            <option value="200" selected>US100: Company B - Project B </option>
          </select>
        </div>
        <label for="select2-search__field">Previous versions</label>
        <div class="instructions">
        </div>
      `;
      expect(stripSpaces(createPreviousVersionsDropdown(content))).to.equal(stripSpaces(expectedRender));
    });
  });
});
