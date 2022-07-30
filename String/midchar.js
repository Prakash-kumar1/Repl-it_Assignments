// Question no.-26: Given a string, return the middle character, if the string length is odd, else return the middle two characters.

// Input Format :  Given a strings str
// Output Format :  Return the middle character if string length is odd else return middle two characters.

// Sample Input:  test
// Sample Output:  es

// Sample Input:  testing
// Sample Output: t


function middleChar(str){
    let mid = Math.floor(str.length / 2);
    let result = str[mid];  
      if(str.length % 2 === 0 && mid > 0) {
        result = str[mid-1] + result ;
      }
      return result;
    }
    console.log(middleChar("testing"))
    console.log(middleChar("test"))
    exports.middleChar = middleChar