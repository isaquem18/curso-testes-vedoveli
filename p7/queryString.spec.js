import { queryString, parse } from './queryString';

describe('check queryString function', () => {

  it('should create a valid querystring from the object passed as parameter', () => {
    const obj = {
      name: 'foo',
      age: '26'
    };
    expect(queryString(obj)).toBe('name=foo&age=26');
  });

  it('should throw an error when an object is passed with an object value', () => {
    const obj = {
      name: 'foo',
      age: '26',
      address: {
        rua: 'example name',
      }
    };

    expect(() => {
      queryString(obj)
    }).toThrowError();
  })
});

describe('check parse function', () => {

  it('should convert a querystring to a object', () => {

    const queryStringValue = 'name=foo&age=26';
    expect(parse(queryStringValue)).toEqual({
      name: 'foo',
      age: '26'
    })
  });

  it('should convert a single key querystring to a object', () => {

    const queryStringValue = 'name=foo';
    expect(parse(queryStringValue)).toEqual({
      name: 'foo',
    })
  });

});