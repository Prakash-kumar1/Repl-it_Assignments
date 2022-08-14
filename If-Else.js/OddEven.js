// Question no-5: Given a number, determine whether it is odd or even.

// Input: Input is provided as functional parameter.

// Output: Return the output.

// Eg 1: 5

// output: odd

// Eg 2: 8

// output : even

function odd_even(num){
    // write your code here
  if (num%2 == 0){
    return ("even")
  } else {
    return ("odd") 
  }
    // return the answer
  }
  console.log(odd_even(5)) ;
  exports.odd_even = odd_even
  