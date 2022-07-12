// Question Number 8:Given an integer array and an element as function parameter, return the index of the given element if it exists, else return “Not Found”. If the array contains multiple occurence of an element return the index of last occurrence of the element.
// Input Format;An array arr and an integer element


// Output Format:If element exist in the array return the index of the element else return "Not Found". If there are multiple occurence of the element return the last occurence of the element

// Sample Input:
// [1, 2, 3,] 2
// Sample Output:
// 1
// Sample Input:
// [2,5,10] 9
// Sample Output:
// Not Found
// Sample Input:
// [2, 5, 10, 7, 5, 19, 10] 5
// Sample Output:
// 4



function indexOf(arr, element){
    for(i=arr.length -1;i>=0;i--){
        if(arr[i]== element){return i}
      }
      return "Not Found"
    }
  console.log(indexOf([2,5,10,7,5,19,10] ,5))
  exports.indexOf = indexOf