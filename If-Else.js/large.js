// Question no-2:Given two numbers return the largest number.

// Input: Inputs are provided as functional parameters.

// Output: Return the largest number.

// Eg 1: num1 = 10, num2 = 20
// output: 20

// Eg 2: num1 = 70, num2 = 50
// output :70

function largest(num1,num2){
    // write your code here
  // return Math.max(num1,num2); 
             // OR
        
    if(num1>num2){
      return num1
    } else{
      return num2
    }
    // return the answer
  }
  console.log( largest(160,190)) ;
  exports.largest = largest



  