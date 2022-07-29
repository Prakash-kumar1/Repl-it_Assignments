// Question no.-17: Given 3 strings, join string1 and string2 separated by string3. Return the final string.

// Input Format : Given three strings str1, str2 and str3
// Output Format :  Return the str3 seperated string.

// Sample Input:  air    campus    -
// Sample Output:    air - campus

// Sample Input:  javascript    cool     is
// Sample Output:  javascript is cool


function stringSep(str1, str2, str3){
  
    return str1.split(' ').concat(str2.split(' ')).join(` ${str3} `)
    
      }
    
    console.log(stringSep('air', 'campus', '-'))
    console.log(stringSep('javascript','cool','is' ))
    exports.stringSep = stringSep