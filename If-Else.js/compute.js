// Question no-12: Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// Input: Inputs are provided as functional parameters.

// Output: Return the answer.

// Eg 1: 10   2

// Output: 12

// Eg 2: 7   7

// Output : 42


function compute_sum(num1,num2){
    // write your code here
  if (num1 == num2){
    return (num1+num2)* 3
  } else {
    return (num1+num2)
  }
  }
  console.log(compute_sum(7,7)) ;
  exports.compute_sum = compute_sum