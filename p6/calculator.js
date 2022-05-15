module.exports.sum = function(a, b) {
  if (!a || !b) throw Error();
  return a + b;
}

module.exports.sub = function(a, b) {
  return a - b;
}

module.exports.div = function(a, b) {
  return a / b;
}

module.exports.mult = function (a, b) {
  return a * b;
}
