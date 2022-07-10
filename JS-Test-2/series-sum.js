// Question number: - 4   Take an integer N and print the sum of series given below upto N numbers.

// S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n)

// Final answer should be rounded off to three decimal place.

// in case if you dont know how to roundoff to three decima ans use toFixed() like this.

// ans = ans.toFixed(3)

// Input:  "n" will be provided as function parameters

// Output:  sum

// Eg:  n = 3
// output: 2.167

// Explanation: S = 1 + 2/(1+2) + 3/(1+2+3) = 1 + 2/3 + 3/6 = 13/6 = 2.167


function sum(n){
    s=0
       for(i=1;i<=n;i++){
         s=s+(2/(i+1))
         // console.log(s)
       }
        // s=s.toFixed(3)
       return parseFloat(s.toFixed(3))
     }
   console.log( sum(3))
   exports.sum = sum