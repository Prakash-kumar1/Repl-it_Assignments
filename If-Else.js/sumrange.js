// Question no-3: You will be given two numbers, if their sum is in 50..80 (inclusive) then return 65 otherwise return 80.

// Input: Inputs are provided as functional parameters.

// Output: Return the answer.

// Eg 1: num1 = 30, num2 = 40
// Output: 65

// Eg 2: num1 = 10, num2 = 20
// Output : 80


function sum_range(num1,num2){
    // write your code here
    // let x = num1+num2
  if (80 >=(num1+num2) && (num1+num2)>= 50) {
    return 65 ;
  } else  {
    return 80 ;
  }
  }
  console.log(sum_range(10,20))
  exports.sum_range = sum_range