// Question no.-18: Given a string, return the string in reverse
// Input Format :  Given a string str
// Output Format :  Return the string in reverse

// Sample Input:  aircampus
// Sample Output:  supmacria

// Sample Input:  javascript
// Sample Output:  tpircsavaj


function reverse(str){
    // return str.split('').reverse().join('');
    
    // OR Use for loop
      
    let reversedName = '' ;
    for(let i=0; i<str.length; i++){
        reversedName = str[i] + reversedName ;
    }
    return(reversedName) ;
    }
    
    console.log(reverse('aircampus'));
    console.log(reverse('javascript'));
    exports.reverse = reverse