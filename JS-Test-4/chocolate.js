// Question Number -5: Unlce Ben decides to give chocolates to kids in his neighbourhood. He predecides the number of chocolates he wants to give each kid and arranges them in a bag. Now he wants to give 2 more chocolates to kids who less than 5 and reduce 1 chocolate who got more than 10.

// Input Format : An array arr

// Output Format : Return the array after correcting the number of chocolates.

// Sample Input: [1, 6, 7, 11]
// Sample Output: [3,6,7,10]


function more_choclates(arr){
    let results = [] ;
     for(let i of arr){
       // console.log(i)
       if(i<5){
         results.push(i+2)
       }else if(i>10){
         results.push(i-1)
       }else{
         results.push(i)
       }
     }
     return results 
   }
   console.log( more_choclates([1, 6, 7, 11]))
   exports.more_choclates = more_choclates