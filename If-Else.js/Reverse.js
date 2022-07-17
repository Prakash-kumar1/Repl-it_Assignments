// Question no-9: Write a program to check the given 2 digit integer is equal to its reverse or not.

// Input: Input is provided as functional parameter.

// Output: Return yes or no as output.

// Eg 1: 11
// Output: yes

// Eg 2: 54
// Output : no


function reverse_equal(num){
    // write your code here
   let x = (num%10);
    let y = Math.floor(num/10);
    let reversenumber =( (x*10)+y)
   if (num==reversenumber){
     return ("yes")
   } else {
     return ("no")
   }
  }
  console.log(reverse_equal(54))
  exports.reverse_equal = reverse_equal