function isNumber(x) {
  return (typeof x === 'number') && !isNaN(x);
}

function sum(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new TypeError();
  }
  return a + b;
}

module.exports = sum;
