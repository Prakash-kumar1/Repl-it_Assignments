// Question no.-11: Given a string, remove all the whitespaces and then return the new string.
// Input Format :  Given a string str
// Output Format :  Return the string after removing all the whitespace

// Sample Input:  " air campus "
// Sample Output:  "aircampus"

// Sample Input:  "     java script"
// Sample Output:  javascript

function removeSpace(str){
    return str.replace(/ /g, "") ;
   }
   console.log(removeSpace(" air campus "))
   console.log(removeSpace("     java script"))
   exports.removeSpace = removeSpace