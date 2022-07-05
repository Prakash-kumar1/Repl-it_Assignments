// Question no.-3: Think a series exactly like the one shown in example.

// Figure out the pattern. 

// and find sum of all numbers in pattern

// Input: 
// number of lines will be provided as function parameter.


// Eg: 

// n = 5

// output: 

// 55

// explanation :

// This will be pattern: 
// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5

// sum of every element in this is 55


// eg:

// n = 2 

// output:

// 5

// explanation: 

// 2
// 1 2

// Note: there is a space between two values 
// Eg: 4 and 5 have space between them
// and there is no space at the end of the row.



function pattern(n){
    let sum = 0;
    for(let i=n; i>=1; i--){
      for(let j=i; j<=n; j++){
      sum += j;
    }
    }
    return sum ;
  }
  console.log(pattern(5))
  exports.pattern = pattern