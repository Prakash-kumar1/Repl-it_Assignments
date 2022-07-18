// Question no-17:  Write a program to check if the given 3 digit number is equal to its reverse or not.

// Input: Input is provided as functional parameter.

// Output: Return the answer string.

// Eg 1: 101
// Output: yes

// Eg 2: 527
// Output : no


function reverse(num){
    // write your code here
  let  first=num % 10 ;
    second=Math.floor(num/10) % 10 ;
   third=Math.floor(num/100) ;
    let reversenumber=(first*100)+(second*10)+(third);
    if(num == reversenumber){
    return ("yes");
    }else{
      return ("no");
    }
  }
  console.log(reverse(527))
  exports.reverse = reverse