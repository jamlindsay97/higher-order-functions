//activity one

//Write a simple function that logs ‘Hello Codenation" to the console.
// Then write a higher-order function which will run the simple function five times, even though you only call it once.
// Hint: Pass the simple function as a parameter, which will involve a For loop

const fiveTimes = (str) => {
  for (i = 0; i < 5; i++) {
    console.log(str);
  }
};
const logOnce = (str, fn) => {
  fn(str);
};

logOnce("Hello CodeNation", fiveTimes);

//activity two

// The array method .map is an example of a higher-order function.
// Declare a variable with five numbers, then use .map to iterate through the array and multiply each array item by 3

let numbers = [1, 3, 5, 7, 9];

const timesThree = (input) => {
  return input.map((x) => x * 3);
};
console.log(timesThree(numbers));

numbers = [890172, 26, 333, 55, 17];
console.log(timesThree(numbers));

//activity three

//Test this function to ensure it works by passing a number to the doMaths function.
// Then passing a number and one of the four maths functions to the returned function.

const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

console.log(doMaths(2)); //returns (num2, fn) => {return fn(num1, num2)} as [Function (anonymous)] in console ??
console.log(doMaths(2)(5, add)); //returns 2+5 (7)
console.log(doMaths(2)(5, divide)); //returns 2/5 (0.4)
console.log(doMaths(2)(5, multiply)); //returns 2x5 (10)
console.log(doMaths(2)(5, subtract)); //returns 2-5 (-3)
