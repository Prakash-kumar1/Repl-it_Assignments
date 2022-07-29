// Question no.-10: Given a string and two index values, return the string from the start index to end index.
// Input Format : Given a string str and two integers a and b
// Output Format :  Return the string from the start index to the end index.

// Sample Input:  aircampus 3 9
// Sample Output:  campus

// Sample Input:  javascript 4 10
// Sample Output:  script


function substring(str,a,b){
    return (str.slice(a,b)) ;
   }
   console.log(substring('aircampus',3,9))
   console.log(substring('javascript' ,4 ,10))
   exports.substring = substring