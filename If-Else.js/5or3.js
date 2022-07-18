// Question no-13: Write a JavaScript program to check whether a given positive number is a multiple of 3 and 5.

// Input: Input is provided as functional parameter.

// Output: Return the output.

// Eg 1: 10
// Output: no

// Eg 2: 15
// Output : yes


function is_multiple(num){
    // write your code here
  if (num%3 == 0 && num%5 ==0){
    return "yes"
  } else {
    return "no"
  }
  }
  console.log( is_multiple(15))
  console.log( is_multiple(16))
  exports.is_multiple = is_multiple