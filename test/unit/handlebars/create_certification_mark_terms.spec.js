const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { createCertificationMarkTerms } = helpers;

const stripSpaces = str => str.replace(/\s+/g, '');

const { certificationMarkTermsContent } = require('../../fixtures/form_values');

describe('Handlebars Helper', () => {
  describe('createCertificationMarkTerms', () => {
    it('renders a default list of checkboxes', () => {
      const content = certificationMarkTermsContent;
      const expectedRender = `
        <div class="row">
          <fieldset>
            <legend>Instructions.</legend>
            <div class="instructions">
            </div>
            <div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termOne" name="certificationMarkTerms" value="termOne"
          />
          <label for="termOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div><div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termTwo" name="certificationMarkTerms" value="termTwo"
          />
          <label for="termTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div>
          </fieldset>
        </div>
      `;
      expect(stripSpaces(createCertificationMarkTerms(content))).to.deep.equal(stripSpaces(expectedRender));
    });

    it('rerenders with checked option if one checked option is given', () => {
      const content = certificationMarkTermsContent;
      const checkedOption = 'termOne';
      content.hash.checkedOptions = checkedOption;
      const expectedRender = `
        <div class="row">
          <fieldset>
            <legend>Instructions.</legend>
            <div class="instructions">
            </div>
            <div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termOne" name="certificationMarkTerms" value="termOne" checked=checked
          />
          <label for="termOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div><div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termTwo" name="certificationMarkTerms" value="termTwo"
          />
          <label for="termTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div>
          </fieldset>
        </div>
      `;
      expect(stripSpaces(createCertificationMarkTerms(content))).to.deep.equal(stripSpaces(expectedRender));
    });

    it('rerenders with checked options if more than one checked option is given', () => {
      const content = certificationMarkTermsContent;
      const checkedOption = ['termOne', 'termTwo'];
      content.hash.checkedOptions = checkedOption;
      const expectedRender = `
        <div class="row">
          <fieldset>
            <legend>Instructions.</legend>
            <div class="instructions">
            </div>
            <div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termOne" name="certificationMarkTerms" value="termOne" checked=checked
          />
          <label for="termOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div><div class="columns small-12 checkbox">
          <input
            type="checkbox" id="termTwo" name="certificationMarkTerms" value="termTwo" checked=checked
          />
          <label for="termTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo doloremque soluta nihil quasi, earum iste culpa et aperiam ab.</label>
        </div>
          </fieldset>
        </div>
      `;
      expect(stripSpaces(createCertificationMarkTerms(content))).to.deep.equal(stripSpaces(expectedRender));
    });
  });
});
