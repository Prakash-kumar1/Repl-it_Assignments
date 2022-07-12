// Question Number 5:You are given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.
// Input Format:Two array arr1 and arr2

// Output Format;Concatenation of arr1 and arr2


// Sample Input:
// [1, 3]
// [2, 5]
// Sample Output :
// [1, 3, 2, 5]


function arrayConcat(arr1, arr2){
    return arr1.concat(arr2)
  
    //     OR use Spread operator
  
    // let addarray = [...arr1,...arr2]
    //   return addarray
  }
  console.log(arrayConcat([1, 3], [2, 5]))
  exports.arrayConcat = arrayConcat