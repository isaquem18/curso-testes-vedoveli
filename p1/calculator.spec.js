const sum = require('./sum');

describe('calculate operations', () => {

  it('should sum the first and second parameters, so 2 and 2 must return 4', () => {
    expect(sum(2, 2)).toBe(4);
    expect(sum(7, 3)).toBe(10);
  });

})