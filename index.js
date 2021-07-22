module.exports = function fizzbuzz(v) {
  // eslint-disable-next-line no-nested-ternary
  return v % 15 ? (v % 3 ? (v % 5 ? v : "Buzz") : "Fizz") : "FizzBuzz";
};
