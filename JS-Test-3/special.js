// Question no.-9: Take an integer as input  print 'YES' if  number is a special number. Otherwise, print 'NO'.

// Hint:

// A special number is a number which is equal to the sum of the factorials of its digits. Example: For number = 145, the output should be 1! + 4! + 5! = 145 Hence 145 is a special number.

// Constraints: 0 <= number <= 100

// Input: The first line of the input contains an integer number.

// Output: Print YES if the number is a special number, otherwise print NO.

// Example:

// Input: 145
// Output: YES


function specialNumber(n){
    if (n == 0) return 'NO';
    let originalNum = n;
    let sum = 0;
    while(n > 0) {
      let digit = n % 10;
      sum += getFact(digit);
      n = Math.floor(n/10);
    }
    if(originalNum === sum) return 'YES'
    else return 'NO'
  }
  function getFact(n) {
    let fact = 1;
    for(let i=2; i<=n; i++) {
      fact *= i;
    }
    return fact;
  }
  console.log(specialNumber(145));
  exports.specialNumber = specialNumber