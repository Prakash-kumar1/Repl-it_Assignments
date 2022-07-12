// Question Number 6:Given a variable arr as function parameter, return “YES” if the given variable arr is an array else return “NO”
// Input Format:An array arr


// Output Format:YES or NO


// Example1

// Sample Input:
// [1,2,3]
// Sample Output:
// YES
// Example2

// Sample Input:
// 5
// Sample Output:
// NO



function isArray(arr){
    // Array.isArray() returns true if an object is an arry, otherwise false:
      
      if(Array.isArray(arr)==true){
        return "YES"
      } else{
       return "NO" 
      }
      }
    console.log(isArray([1,2,3]))
    exports.isArray = isArray