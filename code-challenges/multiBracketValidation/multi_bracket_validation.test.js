'use strict';

const mBV = require('./multi_bracket_validation.js');


describe('Edge Cases', () => {
  it('Handles something other than a string', () => {
    expect(mBV(4)).toBe(false);
  });
});

describe('Checks for bad bracket pairing', () => {
  it('Equal opening and closing but not matching', () => {
    expect(mBV('(({{[[(]]]}}))')).toBe(false);
  });
  it('Unbalanced opening and closing brackets', () => {
    expect(mBV('([{})')).toBe(false);
  })
});

describe('Checks for good bracket pairing', () => {
  it('Single pair of brackets', () => {
    expect(mBV('{}')).toBe(true);
  });
  it('Multiple pairs of brackets', () => {
    expect(mBV('{}[]')).toBe(true);
  });
  it('Brackets and letters', () => {
    expect(mBV('[]TDDforTheWin{}')).toBe(true);
  });
});

