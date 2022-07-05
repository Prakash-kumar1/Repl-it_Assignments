// Question no.-8: Take a number and return all the even digits of the number.

// Constraints:

// 0 <= number <= 10000

// Input:  A single integer is provided as input.

// Output:  Return a list of even digits of the number if multiple digits are combine it in string.Return -1 in case there are no even digits

// all ans should be in string

// Example:

// Input:   12034 
// Output:   204


function evenDigits(n){
    // we are considering 0 as a even number
    if(n==0){
      return "0"
    }else{
      let str= "";
      console.log(typeof str);
  let digit;
  while(n!= 0){
    digit = n%10;
      n = Math.floor(n/10);
      if(digit%2==0){
        // str = digit+str; 
        // OR you can use
          str =`${digit}${str}`;
          }
      }  
      // Ternariy operator Syntax
      // Condition ? true  : false
    return str == ""  ? "-1" : str;    
      // OR we can use this 
       // if(str==''){
       //   return "-1" ;
       // } else {
       //   return str ;
       // }
    }
  }
  console.log(evenDigits(12356))
  exports.evenDigits = evenDigits