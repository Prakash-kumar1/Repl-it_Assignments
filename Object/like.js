// Question Number-1: Given an object with counts of likes and dislikes, return what vote count should be displayed.

// Input Format :  An object obj
// Output Format :  Return the total vote count

// Sample Input:  { upvotes: 13, downvotes: 0 }
// Sample Output: 13

// Sample Input:   { upvotes: 2, downvotes: 33 }
// Sample Output:  -31


function likesDislikes(obj){
    let result = obj['upvotes']- obj['downvotes']
      return result
    }
    console.log(likesDislikes({ upvotes: 13, downvotes: 0}))
    exports.likesDislikes = likesDislikes