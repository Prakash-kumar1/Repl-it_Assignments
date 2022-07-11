// Question Number-8 :  Take a number and find the "ans" by sum of sqaure of digits. once you find this "ans" repeat the steps ( I mean find sum of square of digits of ans) and repeat this process until you get 1.

// Eg: 49 => 44 + 99 =>16+81 => 97
// since 97 is not equal to 1 so we will repeat the steps
// 97 => 99+77 = 81+49 = 130
// it is still not 1: so lets repeat
// 130 => 11 + 33 + 0 => 10 it is still not 1: so lets repeat
// 10 => 1*1 +0 = 1

// If after certain number of steps finally we get 1 than number is called "CodeSpecial"

// in case if it is not possible to get 1 after any number of steps than lets call that number "SomethingUnusual"


function checkNumber(n){
    let counter = 1;
     while(counter < 100 && n != 1){
       let sum = 0
       while(n!=0){
         let x = n%10
         sum=sum+(x*x)
        n= Math.floor(n/10) 
       }
       counter++ ;
       n = sum
     }
    // return sum ;
    if(n == 1){
      return ("CodeSpecial") ;
    } else {
      return ("SomethingUnusual")
    }
  }
  console.log(checkNumber(130))
  exports.checkNumber = checkNumber