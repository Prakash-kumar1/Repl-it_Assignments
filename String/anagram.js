// Question no.-19: Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// Input Format :  Given two strings str1 and str2
// Output Format :  Return the true if the given strings are anagrams else return false

// Sample Input:   elbow     below
// Sample Output:   true

// Sample Input:  night       thin
// Sample Output:   false


function anagram(str1, str2){
    let string1 = str1.split("").sort().join("") ;
    let string2 = str2.split("").sort().join("") ;
    
    if(string1 == string2){
      return true ;
    }else{
      return false ;
    } 
    }
    console.log(anagram('elbow' , 'below')) ;
    console.log(anagram('night' , 'thin')) ;
    console.log(anagram("indian","ndiani")) ;
    exports.anagram = anagram