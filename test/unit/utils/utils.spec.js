const { expect } = require('chai');
const { removeElFromArray } = require('../../../helpers/utils');

describe('Utils', () => {
  it('removes an element from an array', () => {
    const arr = ['one', 'two', 'three', 'four'];
    const newArr = removeElFromArray(arr, 'three');
    expect(newArr).to.deep.equal(['one', 'two', 'four']);
  });

  it('returns an unchanged array when array does not have element', () => {
    const arr = ['one', 'two', 'three', 'four'];
    const newArr = removeElFromArray(arr, 'zero');
    expect(newArr).to.deep.equal(['one', 'two', 'three', 'four']);
  });
});
