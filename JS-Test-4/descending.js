// Question Number -13: Given an array, return the descending order
// Input Format: An array arr

// Output Format: Return the array in descending order

// Sample Input:  [1, 5, 7, 8]
// Sample Output:  [8,7,5,1]

// Sample Input:  [1, 2, 3, 4, 3]
// Sample Output:  [4,3,3,2,1]


function descending_order(arr){
    let result = arr.sort().reverse();
    return result ;
  }
  console.log(descending_order([1, 5, 7, 8]))
  console.log(descending_order([1, 2, 3, 4, 3]))
  exports.descending_order = descending_order