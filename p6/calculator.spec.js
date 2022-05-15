const { sum, sub, mult, div } = require('./calculator');

describe('check the calculator function', () => {

  it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should throw an error with falsy arguments', () => {
    expect(() => {
      sum()
    }).toThrowError()
  });

  it('should subtract 3 from 10 and result 7', () => {
    expect(sub(10, 3)).toBe(7);
  })

  it('should multiply 3 and 3 and restults 9', () => {
    expect(mult(3, 3)).toBe(9);
  })

  it('should divide 10 by 2 and results 5', () => {
    expect(div(10, 2)).toBe(5);
  })
});
