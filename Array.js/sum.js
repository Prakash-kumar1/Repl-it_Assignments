// Question Number-3: You are given an integer array as function parameters. Find and return the sum of the first and last element of the array.
// Input Format : An array arr

// Output Format : Sum of First and Last Elements of the Array

// Sample Input:
// [1, 2, 3 ,4 ,5 ,6 7]
// Sample Output :
// 8


function sumFirstLast(arr){
    return (arr[0] + arr[arr.length-1])
  }
  console.log(sumFirstLast([1, 2, 3 ,4 ,5 ,6 ,7]))
  exports.sumFirstLast = sumFirstLast