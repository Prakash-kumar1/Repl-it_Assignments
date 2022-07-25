// Question no.-5 Given a string, return the string after changing the uppercase characters to lowercase and lowercase characters to uppercase.
// Input Format :  A string string
// Output Format: Change all the lowercase characters to uppercase and uppercase character to lowercase 

// Sample Input:  AirCampus
// Sample Output:  aIRcAMPUS

// Sample Input:  JavaScript
// Sample Output:  jAVAsCRIPT


function upperLower(strings) {
    let uppLow = []
    let upper = strings.toUpperCase();
    let x = upper.split('')
      // console.log(x)
    
    let newArr = strings.split('')
      // console.log(newArr)
    for(let i=0; i<newArr.length; i++){
      if(newArr[i] == x[i]){
        uppLow.push(newArr[i].toLowerCase())
      }
      else{
         uppLow.push(newArr[i].toUpperCase())
      }
    }
      return uppLow.join('')
    }
    console.log(upperLower('JavaScript'))
    console.log(upperLower('AirCampus'))
    exports.upperLower = upperLower
