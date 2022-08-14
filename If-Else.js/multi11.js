// Question no-8:Write a program to check if the given number is multiple of 11 or not. If the given number is multiple of 11 then print the 3rd power of the number else return the number.

// Input: Input is provided as functional parameter.

// Output: Return the output.

// Eg 1: 10
// Output: 10

// Eg 2: 11
// output : 1331


function check_11(num){
    // write your code here
  if (num%11 == 0){
    return (num**3)
  } else {
    return num ;
  }
  }
  console.log(check_11(11)) ;
  exports.check_11 = check_11