// Question no.- 1: Given an string, return “YES”, if the string length is greater than 10 else return “NO”
// Input Format :  A string string

// Output Format : If length of the string is greater than 10 return "YES" else return "NO".

// Sample Input: aircampus
// Sample Output: NO

// Sample Input:  javascript
// Sample Output:  YES


function greater(string){
    if(string.length >= 10){
     return('YES')
    }else{
    return('NO')
    }
  }
  console.log(greater('javascript'))
  console.log(greater('aircampus'))
  exports.greater = greater