// Question Number -2 :Given an integer array, and a number ‘n’. In the range of [1 to n] add all the numbers in the middle of the array.

// Input Format:- An array arr and a number n

// Output Format:- In the range of [1 to n], add all the numbers in the middle of the array and return the array.

// Sample Input: [1, 5, 7, 8]    3
// Sample Output: [1, 5, 1, 2, 3, 7, 8]


// Sample Input: [1, 2, 3] 5
// Sample Output: [1, 2, 1, 2, 3, 4, 5, 3]


function addMiddle(arr, n){
    let mid = Math.ceil(arr.length/2) ;
      // console.log(mid) ;
      for(let i=n; i>=1; i--){
        console.log(i);
      arr.splice(mid,0,i) ;
      }
      return arr ;
    }
    console.log( addMiddle([1, 5, 7, 8] , 3))
    exports.addMiddle = addMiddle