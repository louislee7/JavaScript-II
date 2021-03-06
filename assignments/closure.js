// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const calculus = (a) => {
  const countSum = (b,c) => {
    return b+c;
  }
  var sum = countSum();
  var result = a + sum;
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  var i = 0;
  const addOne = () => {
    return i++;
  }
  return addOne;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const obj = {
    increment: function () {
      var i = 0;
      const addOne = () => {
        return i++;
      }
      return addOne;
    },
    decrement: function () {
      var i = 0;
      const minusOne = () => {
        return i--;
      }
      return minusOne;
    }
  }
  return obj;
};
