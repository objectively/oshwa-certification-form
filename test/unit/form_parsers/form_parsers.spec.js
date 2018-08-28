const { expect } = require('chai');

const parsers = require('../../../helpers/form_parsers.js');

const {
  addUrlFields,
  arrayCheckboxFormFields,
  arrayFields,
  booleanFormFields,
  booleanSelectFields,
  objectCheckboxFormFields,
  referenceFields
} = parsers;

describe('FormParsers', () => {
  it('returns the correct number of addUrlFields (1)', () => {
    expect(addUrlFields.length).to.equal(1);
  });

  it('returns the correct number of arrayCheckboxFormFields (1)', () => {
    expect(arrayCheckboxFormFields.length).to.equal(1);
  });

  it('returns the correct number of objectCheckboxFormFields  (1)', () => {
    expect(objectCheckboxFormFields.length).to.equal(1);
  });

  it('returns the correct number of arrayFields (1)', () => {
    expect(arrayFields.length).to.equal(1);
  });

  it('returns the correct number of booleanFormFields (2)', () => {
    expect(booleanFormFields.length).to.equal(2);
  });

  it('returns the correct number of booleanSelectFields  (9)', () => {
    expect(booleanSelectFields.length).to.equal(9);
  });

  it('returns the correct number of referenceFields (1)', () => {
    expect(referenceFields.length).to.equal(1);
  });
});
