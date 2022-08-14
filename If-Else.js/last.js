// Question no-18: Write a program to check whether the last digit of a number is divisible by 2 or not.

// Input: Input is provided as functional parameter.

// Output: Return the answer string.

// Eg 1: 10
// Output: yes

// Eg 2: 7
// Output : no


function last_digit(num){
    // write your code here
    let last = Math.floor(num%10)
  if (last%2 == 0){
    return "yes"
  } else {
    return "no"
  }
  }
  console.log(last_digit(7)) ;
  exports.last_digit = last_digit