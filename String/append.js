// Question no.-8 : Given a sentence and a word, add the given word to the end of the string.

// Input Format :  Two string str1 and str2
// Output Format :  Add str2 to end of str1 and return str1

// Sample Input:  air  campus
// Sample Output:  aircampus

// Sample Input:  Java   script
// Sample Output:  Javascript


function appendEnd(str1, str2){
    return str1.concat(str2) ;
   }
   console.log(appendEnd('air','campus'))  ;
   console.log(appendEnd('Java' , 'script')) ;
   exports.appendEnd = appendEnd