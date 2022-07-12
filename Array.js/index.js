// Question Number 7:You are given two variables arr and element as function parameters. Check if the given variable arr is an array or not, if it is an array return the index of element in the array, else return “Not Array”.
// Note: If variable arr is an array but element is not present inside of it return -1

// Input Format:A variable arr and an integer element


// Output Format:If arr is not an array return "Not Array" else return index of element


// Sample Input:
// [1,2,3] 3
// Sample Output:
// 2
// Sample Input:
// 123 3
// Sample Output:
// Not Array



function elementIndex(arr, element){
    if(Array.isArray(arr) == true){
      return arr.indexOf(element)
    }else{
      return "Not Array" ;
    }
  }
  console.log(elementIndex([1,2,3] , 3))
  exports.elementIndex = elementIndex