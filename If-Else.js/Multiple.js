// Question no-4: Check if the given number is a multiple of 3 and 7.

// Input: Input is provided as functional parameter.

// Output: Return the answer.

// Eg 1: 10
// output: no

// Eg 2: 21
// output : yes

function check(num1){
    // write your code here
  if(num1%3 == 0 && num1%7 == 0){
    return "yes" ;
  } else {
    return "no" ;
  }
    // return the answer
  }
  console.log( check(21)) ;
  exports.check = check