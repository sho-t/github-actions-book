module.exports = function fizzbuzz(v) {
    return v%15?v%3?v%5?v:'Buzz':'Fizz':'FizzBuzz';
}