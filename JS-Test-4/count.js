// Question Number -8: Given an integer array, find all the elements which are divisible by the index position in which they are present. Consider the index of array starts from 1

// Input Format : An array arr

// Output :Return number of integers which are divisible by its index (Assume that the index start from 1 and not 0)

// Sample Input: [1, 5, 7, 8]
// Sample Output: 2

// Explanation: Consider that the index starts from 1 so, 1%1=0 , 5%2 = 1, 7%3 = 1, 8%4 = 0 , only 2 elements are divisible by their index

function count_all_divisions(arr){
    let count = 0;
    let index = 1; 
      for(let i=0; i<arr.length; i++){
        if(arr[i] % index == 0){
          count++ ;
        }
        index++ ;
      }
      return count++
    }
    console.log(count_all_divisions([1, 5, 7, 8]))
    exports.count_all_divisions = count_all_divisions