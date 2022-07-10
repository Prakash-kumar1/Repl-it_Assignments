// Question number: - 6   Take a number and find the sum all the even digits of the number. if there are no even digit in number return -1.

// Input: number will be given as function paramater.

// output: as described above

// eg:  1234

// output: 6

// Explnation:  2, 4 are even digits


function evenSum(n){
    let sum=0;
      let digit=0
      while(n){
        digit = n%10;
        if(digit%2==0)
          sum = sum+digit
        n = Math.floor(n/10);
        }
      if(sum>0){
       return sum ; 
      } else{
        return -1 ;
      }   
      }
    console.log(evenSum(1234))
    console.log(evenSum(123456789))
    exports.evenSum = evenSum