// Question no-14: Write a JS code to check if the given number is multiple of two.

// Input: Input is provided as functional parameter.

// Output: Return the answer.

// Eg 1: 10
// Output: yes

// Eg 2: 7
// Output : no


function is_multiple(num){
    // write your code here
  if (num%2 == 0){
    return "yes"
  } else {
    return "no"
  }
  }
  console.log(is_multiple(7)) ;
  console.log(is_multiple(6)) ;
  exports.is_multiple = is_multiple