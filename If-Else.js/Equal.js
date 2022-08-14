// Question no-6:Write a JavaScript program to check if the two numbers are equal or not. If the two numbers are equal, return “Yeah!!” else “OOPS!”.

// Input: Inputs are provided as functional parameters.

// Output : Return the output.

// Eg 1: num1 = 50, num2 = 50
// output: Yeah!!

// Eg 2: num1 = 20, num2 = 21
// output :OOPS!


function equal_numbers(num1,num2){
    // write your code here
  if(num1==num2){
    return "Yeah!!"
  }else{
    return "OOPS!"
  }
    // return the answer
  }
  console.log(equal_numbers(50,50)) ;
  exports.equal_numbers = equal_numbers