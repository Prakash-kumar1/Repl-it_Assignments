// Question no.-12: Given a string, remove all the whitespaces from the start and then return the new string

// Input Format :  Given a string str
// Output Format :  Return string after removing all the whitespace from the start of the string

// Sample Input:  " air campus "
// Sample Output:  "air campus"

// Sample Input:   "     java script"
// Sample Output:   "java script"


function removeSpace(str){
    return str.trimStart() ;
  }
  console.log(removeSpace(" air campus "))
  console.log(removeSpace("     java script"))
  exports.removeSpace = removeSpace