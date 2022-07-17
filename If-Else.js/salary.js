// Question no-7:Write a JavaScript code to check if the average salary of 5 employees is greater than 50000.

// Input: Inputs are provided as functional parameters.

// Output: Return the output.

// Eg 1: sal1 = 100000, sal2 = 120000, sal3 = 30000, sal4 = 500000, sal5 = 40000
// output: yes

// Eg 2: sal1 = 10000, sal2 = 20000, sal3 = 30000, sal4 = 50000, sal5 = 40000
// output : no


function average_salary(sal1,sal2,sal3,sal4,sal5){
    // write your code here
    if( ((sal1+sal2+sal3+sal4+sal5)/5) > 50000) {
      return ("yes") ;
    } else {
      return ("no") ;
    }
    // return the output
  }
  console.log( average_salary(10000,20000,30000,40000,50000))
  exports.average_salary = average_salary