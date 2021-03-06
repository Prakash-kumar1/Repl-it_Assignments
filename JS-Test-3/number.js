// Question No.-1 : Take an integer and print 'aircampus' if the input integer is an Aircampus number, otherwise print 'no'.

// Hint:

// A number is called Aircampus number if the sum of its own digits each raised to the power of the number of digits is equal to the original number itself.

// Example:

// 123 => 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36

// 1234 => 1^4 + 2^4 + 3^4 + 4^4 = 1 + 16 + 81 + 256 = 354

// Constraints:

// 0 < N < 10^6

// Input:

// A single integer is provided as input.

// Output:

// Print aircampus or no

// Example:

// Input:

// 123

// Output:

// no


function aircampus(n){
    let number = n
    let length = n.toString().length
    let sum = 0
    while(n!=0){
      let last_digit
      last_digit = n%10
      sum += last_digit**length
      n = Math.floor(n/10)
    }
    console.log(sum)
    if(number==sum){
      return 'aircampus'
    } else {
      return 'no'
    }
  }
  console.log(aircampus(123))
  exports.aircampus = aircampus


  //       OR  Use this way

function aircampus(n){
  let original = n, count = 0, sum = 0;
  // Calculate the number of digits
  while(n!=0){
    n = Math.floor(n/10);
    count++;
  }
  console.log(n);
  n= original; // After running the first loop n will become 0 so we are restoring it to original number
  while(n > 0) {
    let digit = n % 10;
    n = Math.floor(n/10);
    sum += digit ** count;
    
  }
  console.log(n);
  return original === sum ? 'aircampus':'no' ;
}

console.log(aircampus(145));
exports.aircampus = aircampus
  