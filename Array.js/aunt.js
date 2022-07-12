// Question Number-4: Aunt May wants to distribute candies to 5 childrens, you are given an array of 5 elements, each element depicts how many candies each child will get. Find and return how many candies Aunt May have in total.
// Input Format:An array arr


// Output Format: Total Candies Aunt May have

// Sample Input:
// [1, 3, 4, 7, 5]
// Sample Output :
// 20


function totalCandies(arr){
    return arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
     
        // OR using Reduce method
     // return arr.reduce((a,b)=> a+b)
     
        // OR using for Loop
     // let sum = 0;
     // for(let i=0; i<arr.length; i++){
     //   sum = sum+arr[i]
     // }
     // return sum
   }
   console.log(totalCandies([1, 3, 4, 7, 5]))
   exports.totalCandies = totalCandies