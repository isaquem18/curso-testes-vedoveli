module.exports.queryString = (obj) => {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      throw new Error('Please check querystring');
    };
  };

  console.log(Object.entries(obj));

  return '?'.concat(new URLSearchParams(obj)
  .toString());
}