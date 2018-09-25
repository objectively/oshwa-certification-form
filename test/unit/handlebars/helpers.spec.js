const { expect } = require('chai');
const helpers = require('../../../helpers/handlebars.js');

const { toLowerCase, markdownify, getCheckedTypes, getCitationValues, renderInstructions, joinArrWithCommas } = helpers;
const stripSpaces = str => str.replace(/\s+/g, '');

describe('Handlebars Utils', () => {
  it('toLowerCase should return a lowercased string', () => {
    expect(toLowerCase('Cat123')).to.equal('cat123');
  });
  it('toLowerCase should return an empty string if given no argument', () => {
    expect(toLowerCase('')).to.equal('');
  });
  it('markdownify should render markdown to html', () => {
    const str = `Lorem **ipsum** dolor sit amet. \n - one \n - two \n - three`;
    const markdownStr = `
      <p>Lorem <strong>ipsum</strong> dolor sit amet. </p>
        <ul>
          <li>one </li>
          <li>two </li>
        <li>three</li>
      </ul>
    `;
    expect(stripSpaces(markdownify(str))).to.equal(stripSpaces(markdownStr));
  });
  it('markdownify should return an empty string if markdown not given an argument ', () => {
    expect(markdownify()).to.equal('');
  });
  it('getCheckedTypes gets a project\'s "additionalTypes" property if it exists', () => {
    const project = {
      additionalType: ['Type One', 'Type Two']
    };
    expect(getCheckedTypes(project)).to.deep.equal(['Type One', 'Type Two']);
  });

  it('getCheckedTypes returns an empty string if there is no project or additional type', () => {
    expect(getCheckedTypes()).to.equal('');
  });

  it('getCitationValues should retrieve a projects citations[] values as a single array', () => {
    const project = {
      'citations[0]': ['1A', '1B'],
      'citations[1]': ['2A', '2B']
    };
    expect(getCitationValues(project)).to.deep.equal([['1A', '1B'], ['2A', '2B']]);
  });
  it('getCitationValues should exclude invalid citation fields', () => {
    const project = {
      'citations[0]': ['1A', '1B'],
      'invalidField[1]': ['2A', '2B']
    };
    expect(getCitationValues(project)).to.deep.equal([['1A', '1B']]);
  });
  it('getCitationValues should returns an empty string is there is no project given', () => {
    expect(getCitationValues()).to.equal('');
  });
  it('renderInstructions should render instructions when instructions are given', () => {
    const instructions = 'My instructions';
    expect(renderInstructions(instructions)).to.equal(instructions);
  });

  it('renderInstructions should render empty string when instructions are not given', () => {
    const instructions = undefined;
    expect(renderInstructions(instructions)).to.equal('');
  });
  it('joinArrWithCommas takes an array and returns a string of comma separated items', () => {
    expect(joinArrWithCommas(['cat', 'dog', 'fish'])).to.equal('cat, dog, fish');
  });
});
