const { queryString } = require('./queryString');

describe('test queryString function', () => {

  it('should result the querystring of the object passed by parameters', () => {
    const obj = {
      name: 'isaque',
      idade: 26
    };
    expect(queryString(obj)).toBe('?name=isaque&idade=26');
  });


  it('should throw an error when pass deep nested objects', () => {
    const obj = {
      name: 'isaque',
      idade: 26,
      endereco: {
        rua: 'tasso de macedo'
      },
      vacinas: [
        'a',
        'b'
      ]
    };

    expect(() => {
      queryString(obj)
    }).toThrowError();
  })
});
