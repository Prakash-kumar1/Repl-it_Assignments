// Question no-19: Write a program to check if the given number is multiple of 13 or not. If the given number is multiple of 13 then return the 5th power of the number,else return the same number.

// Input: Input is provided as functional parameter.

// Output: Return the answer.

// Eg 1: 10
// Output: 10

// Eg 2: 13
// Output : 371293

function divisible(num){
    // write your code here
  if (num%13 == 0){
    return (num**5) ;
  }else{
    return num ;
  }
    // return the answer
  }
  console.log(divisible(10)) ;
  exports.divisible = divisible