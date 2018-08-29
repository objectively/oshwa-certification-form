const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createUrlInputs } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { urlInputsContent } = require('../../fixtures/form_values');

describe('Handlebars Helpers', () => {
  describe('createUrlInputs', () => {
    it('should create paired input fields for title and url', () => {
      const content = urlInputsContent;
      content.hash.citationValues = [];
      const expectedRender = `
        <div class="url_fields field-wrapper" data-template-target="url-inputs">
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="citations[1]--url_title">Citation Title</label>
            <input
            id="citations[1]--url_title"
            type="text"
            class="url_create url_title"
            name="citations[1]"
            placeholder="Enter citation title"
            value=""
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="citations[1]--url_address">Citation URL</label>
            <input
            id="citations[1]--url_address"
            type="text"
            class="url_create url_address"
            name="citations[1]"
            placeholder="Enter a URL including the protocol (e.g https://example.com)"
            value=""
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
          <div class="columns large-offset-1 citation-error"></div>
        </div>
          <div class="row columns js-add-url-inputs-field"><i class="material-icons">add_circle</i></div>
        </div>
      `;
      expect(stripSpaces(createUrlInputs(content))).to.deep.equal(stripSpaces(expectedRender));
    });

    it('should rerender input fields and values when given', () => {
      const content = urlInputsContent;
      const citationValues = [['1A', '1B']];
      content.hash.citationValues = citationValues;
      const expectedRender = `
        <div class="url_fields field-wrapper" data-template-target="url-inputs">
        <div data-template-value="url-inputs" class="form-field-wrapper row">
          <div class="columns small-1"><i class="js-remove-field material-icons">remove_circle</i></div>
          <div class="columns small-11 large-5 medium-5">
            <label for="citations[0]--url_title">Citation Title</label>
            <input
            id="citations[0]--url_title"
            type="text"
            class="url_create url_title"
            name="citations[0]"
            placeholder="Enter citation title"
            value="1A"
            />
          </div>
          <div class="columns small-offset-1 small-11 large-5 medium-5">
            <label for="citations[0]--url_address">Citation URL</label>
            <input
            id="citations[0]--url_address"
            type="text"
            class="url_create url_address"
            name="citations[0]"
            placeholder="Enter a URL including the protocol (e.g https://example.com)"
            value="1B"
            />
            <div class="instructions">Include the protocol to your URL (e.g. http:// or https://)</div>
          </div>
          <div class="columns large-offset-1 citation-error"></div>
        </div>
          <div class="row columns js-add-url-inputs-field"><i class="material-icons">add_circle</i></div>
        </div>
      `;
      expect(stripSpaces(createUrlInputs(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
