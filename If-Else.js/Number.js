// Question no-10: Take one number and check whether number is equal to zero, less than zero, or greater than zero.

// Input: Input are provided as functional parameter.

// Output: Return 0 if number is equal to zero, return 1 if number is greater than 1 and return -1 if number is less than zero.

// Eg 1: 10
// output: 1

// Eg 2: -7
// output : -1

// Eg 3: 0
// output : 0


function checkNumber(num){
    // Write your code here
  if (num == 0){
    return 0
  } else if (num > 1){
    return 1
  } else {
    return -1
  }
  }
  console.log (checkNumber(0))
  exports.checkNumber = checkNumber