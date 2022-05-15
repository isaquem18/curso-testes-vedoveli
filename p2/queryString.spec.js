const queryString = require('./queryString');

describe('object to query string', () => {

  it('should create a valid query string when an object is passed', () => {

    const obj = {
      name: 'isaque',
      profession: 'dev frontend'
    };

    expect(queryString(obj))
      .toBe('name=isaque&profession:dev-frontend')
    ;
  })
});  