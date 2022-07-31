// Question Number-8:   Given an object, return the object as an array where each array element represent the corresponding key value.

// Input Format  :  An object obj
// Output Format :  Return an array where each element represent key value

// Sample Input:  { a: 1, b: 2 }
// Sample Output:  [["a", 1], ["b", 2]]

// Sample Input:  {}
// Sample Output:  []



function array(obj){
    return Object.entries(obj);
   }
   console.log(array({}))
   exports.array = array