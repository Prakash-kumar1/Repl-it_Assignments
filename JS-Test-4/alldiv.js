// Question Number -12: Given an integer array, find all the elements which are divisible by n and return the count

// Input Format: An array arr and a number n

// Output Format: Return the number of integers which are divisible by n

// Sample Input:  [1, 5, 7, 8]  3
// Sample Output: 0

// Sample Input: [1,5,7,8] 1
// Sample Output: 4

function count_all_divisions(arr,n){
    let count = 0 ;
  for(let i=0; i<arr.length; i++){
    if(arr[i]%n == 0){
        count+=1 ;
    }
  }
    return count ;
  }
  console.log(count_all_divisions([1, 5, 7, 8],3))
  exports.count_all_divisions = count_all_divisions