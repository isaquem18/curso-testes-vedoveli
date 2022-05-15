export const queryString = obj => Object
  .entries(obj)
  .map(([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      throw new Error('please check your params');
    }

    return `${key}=${value}`
  })
  .join('&');

export const parse = queryStringValue => Object
  .fromEntries(queryStringValue
    .split('&')
    .map(item => item.split('='))
  );