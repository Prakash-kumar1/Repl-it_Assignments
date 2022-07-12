// Question Number-10: Given an array, a start index and an end index, change all the elements to 0 from the start index to end index.

// Input Format : An array arr


// Output Format : Return updated array

// Sample Input: [1, 2, 3] 1 2

// Sample Output:  [1, 0, 3]

// Sample Input: [2, 5, 10, 7, 5]  2  3
// 2 3
// Sample Output:  [2, 5, 0, 7, 5]


function changeToZero(arr, start, end){
    for(i=start;i<end;i++){
      arr[i]=0
    }
    return arr
}
  console.log(changeToZero([2, 5, 10, 7, 5], 1, 4))
  exports.changeToZero = changeToZero


    // OR use This method

  function changeToZero(arr, start, end){
      arr.splice(start,1,0)
      return arr ;
    }
    console.log(changeToZero([2, 5, 10, 7, 5] , 2, 3))
      exports.changeToZero = changeToZero
    
    

    