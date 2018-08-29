const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { generateUrlCitationFields } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

describe('Handlebars Helpers', () => {
  describe('generateUrlCitationFields', () => {
    it('should generate initial input fields without citations', () => {
      const fieldName = 'fieldName';
      const placeholder = 'placeholder';
      const count = 1;
      const expectedRender = `
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="fieldName[1]--url_title">Citation Title</label>
            <input
            id="fieldName[1]--url_title"
            type="text"
            class="url_create url_title"
            name="fieldName[1]"
            placeholder="Enter citation title"
            value=""
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="fieldName[1]--url_address">Citation URL</label>
            <input
            id="fieldName[1]--url_address"
            type="text"
            class="url_create url_address"
            name="fieldName[1]"
            placeholder="placeholder"
            value=""
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
          <div class="columns large-offset-1 citation-error"></div>
        </div>
      `;

      expect(stripSpaces(generateUrlCitationFields(fieldName, placeholder, count))).to.equal(
        stripSpaces(expectedRender)
      );
    });
    it('should generate default input fields', () => {
      const fieldName = 'fieldName';
      const placeholder = 'placeholder';
      const count = 1;
      const expectedRender = `
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="fieldName[1]--url_title">Citation Title</label>
            <input
            id="fieldName[1]--url_title"
            type="text"
            class="url_create url_title"
            name="fieldName[1]"
            placeholder="Enter citation title"
            value=""
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="fieldName[1]--url_address">Citation URL</label>
            <input
            id="fieldName[1]--url_address"
            type="text"
            class="url_create url_address"
            name="fieldName[1]"
            placeholder="placeholder"
            value=""
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
          <div class="columns large-offset-1 citation-error"></div>
        </div>
      `;

      expect(stripSpaces(generateUrlCitationFields(fieldName, placeholder, count))).to.equal(
        stripSpaces(expectedRender)
      );
    });

    it('should regenerate input fields with given citations', () => {
      const fieldName = 'fieldName';
      const placeholder = 'placeholder';
      const count = 0;
      const addedCitations = [['1A', '1B']];
      const expectedRender = `
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="fieldName[0]--url_title">Citation Title</label>
            <input
            id="fieldName[0]--url_title"
            type="text"
            class="url_create url_title"
            name="fieldName[0]"
            placeholder="Enter citation title"
            value="1A"
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="fieldName[0]--url_address">Citation URL</label>
            <input
            id="fieldName[0]--url_address"
            type="text"
            class="url_create url_address"
            name="fieldName[0]"
            placeholder="placeholder"
            value="1B"
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
          <div class="columns large-offset-1 citation-error"></div>
        </div>
      `;

      expect(stripSpaces(generateUrlCitationFields(fieldName, placeholder, count, addedCitations))).to.equal(
        stripSpaces(expectedRender)
      );
    });
  });
});
