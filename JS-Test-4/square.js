// Question Number -10: Given an array, start index and an end index, square the elements in the given range and return the array

// Input Format: An array arr, start index start and end index end
// Output Format: Return the subarray from the start index to end index.

// Sample Input: [1, 2, 3, 4, 5]  1 3
// Sample Output:  [1,4,9,4,5]


// Sample Input:  [2, 5, 10, 7, 5, 5, 17, 20, 15, 44, 55]  4   8
// Sample Output:  [2,5,10,7,25,25,289,400,15,44,55]


function square(arr,start,end){
    array = arr.slice(start , end);
    let array1 = []
    for(let i=0; i<array.length; i++){
      squr = array[i] ** 2 ;
      array1.push(squr)
    }
    arr.splice(start, array1.length, ...array1)
    return arr ;
  }
  console.log(square([1, 2, 3, 4, 5],1,3))
  exports.square = square