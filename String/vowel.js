// Question no. -3 Given a string, count the number of vowels present in the string and return it.
// Input Format : A string string
// Output Format : Return the count of vowels in the string

// Sample Input: aircampus
// Sample Output: 4

// Sample Input:  javascript
// Sample Output: 3


function vowels(string){
    // find the count of vowels
    const count = string.match(/[aeiou]/gi).length;
  
      // return number of vowels
      return count;
  }
  console.log(vowels('aircampus'))
  exports.vowels = vowels