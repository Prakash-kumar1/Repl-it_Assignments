// Question no.-22:  Given a string remove leading and trailing zeros from it and return the string

// Input Format  :  Given a strings str
// Output Format  :  Return the string after removing all the leading and trailing zeroes

// Sample Input:   230.00
// Sample Output:  230

// Sample Input:   00420
// Sample Output:  420


function removeZeroes(str){
    let value= (str*1).toString() ;
     return(value) 
   }
   console.log(removeZeroes('00420'))
   console.log(removeZeroes('230.00'))
   exports.removeZeroes = removeZeroes