Question Number -7: Given an integer array, and a number ‘n’, please return the sum of integers at odd position and sum of integers at even position.

Input Format:-  An array arr

Output Format: Return array where first element is sum of odd elements & second element is sum of even elements.

Sample Input:  [1, 5, 7, 8]
Sample Output:  [13,8]

Sample Input:  [1, 2, 3]
Sample Output:  [2,4]


function odd_even_position(arr) {
    let oddsum = 0, evensum = 0;
    for (i = 0; i < arr.length; i++) {
      if (i% 2 == 0) {
        evensum += arr[i]
      }
      else {
        oddsum += arr[i]
      }
    }
    return [oddsum,evensum]
  }
  console.log(odd_even_position([1,5,7,8]))
exports.odd_even_position = odd_even_position