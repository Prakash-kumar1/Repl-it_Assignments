// Question no.-27:  Given a string which contains an email address, return true if the given email is valid, else return false.

// Input Format :  Given a strings str
// Output Format  :  Return true if the email is valid else return false

// Sample Input:  js@aircampus.in
// Sample Output:  true

// Sample Input:   admin@aircampus
// Sample Output:   false


// function validEmail(str){
// if(str.endsWith('@aircampus.in')){
//     return true ;
//   }
//     return false ;
//   }
// console.log(validEmail('admin@aircampus'))
// exports.validEmail = validEmail


function validEmail(str){
    let pos = str.indexOf('@') ;
    let dot = str.indexOf('.') ;
    
      if(pos<1 || dot < pos+2){
        return false
      }
      return true
    }
    console.log(validEmail('admin@aircampus')) ;
    console.log(validEmail('js@aircampus.in')) ;
    exports.validEmail = validEmail