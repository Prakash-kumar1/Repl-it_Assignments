// Question Number -4:Unlce Ben is giving choclates to all the kids. He wants to find out which kid has got the highest number of choclates and which kid got least number of choclates

// Input Format :- An array arr

// The array contains number of choclates given to each kid.

// Output Format : Return the position of kid who has got highest choclates and least choclates.

// Sample Input:  [2,5,7,4,1]
// Sample Output: [3, 5]


// Sample Input:  [2,3,1,5,7]
// Sample Output:  [5,3]


function find_min_max(arr){
    let array = [];  
      
    let m = Math.max(...arr)
    let max = (arr.indexOf(m)+1)
      console.log(max)
      
    let n = Math.min(...arr)
    let min = (arr.indexOf(n)+1)
      console.log(min)
      
    array.unshift(max,min);
    return array ;
    }
    console.log(find_min_max([2,3,1,5,7]))
    exports.find_min_max = find_min_max