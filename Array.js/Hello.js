// Question Number-2: You are given an array arr, if the length of the array is greater than 5 return “Hello” else return “World”
// Input Format
// An array arr

// Output Format : If array length greater than 5 return "Hello"
//                 If array length is less than 5  return  "World"

// Sample Input:
// [1, 2, 3 ,4 ,5 ,6 7]
// Sample Output :
// Hello


function arrayHelloWorld(arr){
    if (arr.length > 5){
      return "Hello"
  } else {
    return "World"
  }
     // OR use ternary operator method
  
  // return(arr.length > 5) ? "Hello":"World"
  }
  console.log(arrayHelloWorld([1, 2, 3 ,4 ,5 ,6 ,7]))
  exports.arrayHelloWorld = arrayHelloWorld