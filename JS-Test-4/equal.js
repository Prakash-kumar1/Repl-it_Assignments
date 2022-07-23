// Question Number -1 : Given two arrays. Check if both arrays are equal or not.
// An equal array is one which has equal frequencies of elements. If both the arrays are equal return true else false

// Input Format : - Two arrays arr1 and arr2

// Output Format : - Return true if the arrays are return false

// Sample Input: [1, 5, 7, 8]  [5, 8, 7, 1]
// Sample Output: true


// Sample Input: [1, 2, 3]  [2,4,6]
// Sample Output:  false


function isArray(arr1, arr2){
    let count = 0 ;
    let arr3 = arr1.sort();
    let arr4 = arr2.sort();
      // console.log(arr1);
      // console.log(arr2);
      
      for(let i=0; i<arr1.length; i++){
        if(arr3[i] == arr4[i]){}
        else{count += 1}
      }  
      // console.log(count);  
      
        if(count >= 1){
          return false ;
        } else {
          return true ;
        }
    }
    console.log(isArray([1, 5, 7, 8] , [5, 8, 7, 1]))
    console.log(isArray([1, 2, 3],[2, 4, 6]))
    exports.isArray = isArray