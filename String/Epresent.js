// Question no.-6 Given a string, find out how many times ‘e’ is present in the string. Return the count of ‘e.’
// Input Format : A string string
// Output Format :  return the count of e present in the string.

// Sample Input:  aircampus
// Sample Output:  0

// Sample Input:  help
// Sample Output:  1


function counte(string){
    let Count = 0;
   for (let i= 0; i < string.length; i++) 
   {
      if (string.charAt(i) == 'e') 
        {
        Count += 1;
        }
    }
    return Count;
  }
  console.log(counte('aircampus'))
  console.log(counte('help'))
  exports.counte = counte