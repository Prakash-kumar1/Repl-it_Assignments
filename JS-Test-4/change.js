// Question Number -9: Given an integer array, pos array and element array, change the elements in the integer array based on the pos array and element array.

// Input Format: Three input arrays, arr,pos,ele

// Output Format: Return the output array after changing the elements

// Sample Input:  arr = [1, 5, 7, 8]
//                 pos = [0]
//                 ele = [4]
// Sample Output: [4, 5, 7, 8]


// Sample Input: arr = [1, 2, 3]
//                pos = [2,1]
//                ele = [-1,5]
// Sample Output: [1, 5, -1]

// Note :- The position mentioned in the pos array will always be less than arr array.


function change_elements(arr,pos,ele){
    for(let i in arr){
      arr[pos[i]] = ele[i] ;
    }
    return arr ;
  }
  console.log(change_elements([1, 5, 7, 8], [0],[4]))
  console.log(change_elements([1, 2, 3],[2,1], [-1,5]))
  exports.change_elements = change_elements