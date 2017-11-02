/*
// Goal
// Practice your experience writing higher-order functions.

// Exercise
// Implement your own version of the built-in array map function.

// Yours will take in two arguments.
// The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.
*/

var words = ["ground", "control", "to", "major", "tom"];

// Printing out length of each word:
var wordLength = words.map(function(input) {
  return input.length;
});

// console.log(wordLength);

var upperCaseWords = words.map(function(input) {
  return input.toUpperCase();
});

console.log(upperCaseWords);