const { sum, sub, mult, div } = require('./calculator');

describe('check the calculator functions', () => {

  it('should 2 and 2 result 4', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should should 3 and 2 result 1', () => {
    expect(sub(3, 2)).toBe(1);
  });

  it('should 4 and 3 result 12', () => {
    expect(mult(4, 3)).toBe(12)
  });

  it('should 3 and 3 result 1', () => {
    expect(div(3, 4)).toBe(1);
  })
});