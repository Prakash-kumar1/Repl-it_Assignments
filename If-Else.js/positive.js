// Question number-1: Given a number determine if it positive or negative.

// Input: Input is provided as functional parameter.

// Output: Return the answer.

// Eg 1: 127
// output: positive

// Eg 2: -127
// output : negative

function is_positive(number){
    // write your code here
  if(number > 0){
    return "positive"
  }else{
    return "negative"
  }
    // return the answer
  }
  console.log( is_positive(127)) ;
  exports.is_positive = is_positive