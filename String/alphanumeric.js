// Question no.-21: Given a string, if the string is alphanumeric return true else return false.

// Input Format :  Given a strings str
// Output Format :  Return true if the given strings is alphanumeric else return false

// Sample Input:  aircampus
// Sample Output:  false

// Sample Input:  javascr1pt
// Sample Output:  true


function alphanumeric(str){
    for(let i=0;i<str.length;i++){
    let check= str.split('').sort().join()
    if((check.charCodeAt(i)>47 && check.charCodeAt(i) <58)){
          return true ;
        }
        else {
          return false ;
        }
        // value++
    }
    
    }
    console.log(alphanumeric("aircampus"))
    console.log(alphanumeric("javascr1pt"))
    exports.alphanumeric = alphanumeric