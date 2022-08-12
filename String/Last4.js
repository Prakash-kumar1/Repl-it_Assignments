// Question no.-7  Given a string, return the last 4 characters of the given string.
// Input Format  :  A string string
// Output Format : return the last four characters of the given string. The string length will always be greater than equal to four.

// Sample Input:  aircampus
// Sample Output:  mpus

// Sample Input:  Javascript
// Sample Output:  ript


function lastFour(string){
    return (string.slice(-4));
   }
   console.log(lastFour('aircampus')) ;
   console.log(lastFour('Javascript')) ;
   exports.lastFour = lastFour