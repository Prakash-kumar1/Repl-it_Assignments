// Question number: - 2 Input a Number and return number of digits.

// Constraints: 1<=n<=100000

// Input: "N" - integer number as a function parameter

// Output: number of digits

// Input : n = 10    Output : - 2



function numberOfDigits(n){
    let count=0;
  while(n!=0){
    n = Math.floor(n/10);
    ++count;
  }
     return count ; 
    }
  console.log(numberOfDigits(10))
  console.log(numberOfDigits(10785))
  exports.numberOfDigits=numberOfDigits