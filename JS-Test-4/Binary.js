// Question Number -11: Given an integer array, return true if it can be used for binary search else return false

// Input Format : An array arr
// Output Format : Return true or false

// Sample Input:  [1, 5, 7, 8]
// Sample Output:  true

// Sample Input:  [1, 3, 2]
// Sample Output: false

// Note :- We can apply binary search on array if the array is in descending order as well.


function binary_search(arr){
    let element = 0;
    if(element == 0 || element == 1){
      return true ;
    }
    for(i=1;i<element;i++){
      if(arr[i-1] > arr[i]){
        return false ;
      }
    }
    return true ;
  }
  console.log( binary_search([1, 5, 7, 8]))
  exports.binary_search = binary_search