// Question no. -2 Given a string, add all the characters of the string to an array, excluding whitespaces. Return the character array
// Input Format : A string string

// Output Format : Character array without whitespaces.

// Sample Input:  aircampus
// Sample Output: ['a', 'i', 'r', 'c', 'a', 'm', 'p', 'u', 's']

// Sample Input:  java script
// Sample Output:  ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

function charArray(str){
    // for printing each character
    // for (var i = 0; i < str.length; i++) {
    // console.log(str.charAt(i));
  // }
     return  str.replace(/ /g, '').split('');
  }
  console.log(charArray('aircampus'))  ;
  console.log(charArray('java script'))  ;
  exports.charArray = charArray