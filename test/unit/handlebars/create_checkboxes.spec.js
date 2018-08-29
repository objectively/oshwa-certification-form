const { assert, expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createCheckboxes } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { checkboxesContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createCheckboxes', () => {
    it('should render default list of checkboxes', () => {
      const content = checkboxesContent;
      const expectedRender = `
        <fieldset>
          <legend></legend>
          <div class="row">
            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type One" name="additionalType" value="Type One" />
              <label for="Type One">Type One</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Two" name="additionalType" value="Type Two" />
              <label for="Type Two">Type Two</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Three" name="additionalType" value="Type Three" />
              <label for="Type Three">Type Three</label>
            </div>
          </div>
        </fieldset>
      `;
      expect(stripSpaces(createCheckboxes(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should render checkboxes with single checked checkbox when one checkbox is checked', () => {
      const content = checkboxesContent;
      const checkedTypes = 'Type One';
      content.hash.checkedTypes = checkedTypes;
      const expectedRender = `
        <fieldset>
          <legend></legend>
          <div class="row">
            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type One" name="additionalType" value="Type One" checked=checked/>
              <label for="Type One">Type One</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Two" name="additionalType" value="Type Two" />
              <label for="Type Two">Type Two</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Three" name="additionalType" value="Type Three" />
              <label for="Type Three">Type Three</label>
            </div>
          </div>
        </fieldset>
      `;
      expect(stripSpaces(createCheckboxes(content))).to.deep.equal(stripSpaces(expectedRender));
    });
    it('should render checkboxes with multipe checked checkboxes when more than one checkbox is checked', () => {
      const content = checkboxesContent;
      const checkedTypes = ['Type One', 'Type Three'];
      content.hash.checkedTypes = checkedTypes;
      const expectedRender = `
        <fieldset>
          <legend></legend>
          <div class="row">
            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type One" name="additionalType" value="Type One" checked=checked/>
              <label for="Type One">Type One</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Two" name="additionalType" value="Type Two" />
              <label for="Type Two">Type Two</label>
            </div>

            <div class="columns large-3 medium-4 small-6 checkbox">
              <input type="checkbox" id="Type Three" name="additionalType" value="Type Three" checked=checked/>
              <label for="Type Three">Type Three</label>
            </div>
          </div>
        </fieldset>
      `;
      // expect(createCheckboxes(content)).to.deep.equal(expectedRender);
      expect(stripSpaces(createCheckboxes(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
