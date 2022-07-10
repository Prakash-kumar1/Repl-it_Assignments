// Question No.- 1: Take an integer input and print 'YES' if the integer is a mars number, else print 'NO'.

// Hint:

// A mars number is a number if the sum of its digits can be reduced to single digit in even number of steps.

// Example:

// 199 => 19 => 10 => 1 Number of steps = 3 Hence the number is not a mars number.

// Input:A single integer is provided as function parameter

// Output:Print 'YES' if the number is a mars number, else print 'NO'

// Example:Input: 199          Output: NO 



function marsNumber(n){
    counter = 0 ;
   while(n>9){
     let sum = 0
       while(n!=0){
         let x=n%10
         sum=sum+x
         n=Math.floor(n/10)
       }
     counter++ ;
     n = sum ;
   } 
    if(counter%2==0 && counter!=0){
      return "YES"
    } else {
       return "NO"
    }
  }
  console.log( marsNumber(1))
  console.log( marsNumber(145))
  exports.marsNumber = marsNumber