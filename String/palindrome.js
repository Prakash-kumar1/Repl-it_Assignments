// Question no.-20:  Given a string, if it is a palindrome return true else return false.

// Input Format :  Given a strings str
// Output Format :  Return true if the given strings is palindrome else return false

// Sample Input:  arora
// Sample Output:  true

// Sample Input:  aircampus
// Sample Output: false


function palindrome(str){
    for (let i = 0; i < str.length; i++) {
    // check if first and last string are same
      if (str[i] !== str[str.length - 1 - i]) {
        return false ;
     }
     }
        return true;
    }
    console.log( palindrome("arora")) ;
    console.log( palindrome("aircampus")) ;
    exports.palindrome = palindrome