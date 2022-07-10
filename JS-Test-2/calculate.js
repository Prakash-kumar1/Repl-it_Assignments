// Question number: - 5  For number from 1 to "n" count total numbers that are divisible by 3, also find sum of all numbers that are divisible by 5, if number is divisible by both 3 and 5 take product of those number. and finally return the sum of all three ans.

// input:  interger will be given as function parameter

// output:  sum of three

// Eg:  n = 10

// output:  18


function calculate(n){
    let count=0;
      let sum=0;
        let product=1;
        for(let i=1;i<=n;i++){
          if(i%3==0 && i%5==0){
            product=product*i
          }
          else if(i%5==0){
            sum=sum+i
          }
          else if(i%3==0){
            count++
          }
        }
        // console.log(count)
        // console.log(product)
        // console.log(sum)
       if(product==1){
         return (sum+count)
       }
        else{
          return (sum+count+product)
        }
    }
    console.log(calculate(10))
    exports.calculate = calculate 