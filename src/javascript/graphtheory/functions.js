export const function sum(a, b) {
  return a + b + a
}

if (typeof module !== 'undefined') {
  module.exports.sum = sum
}