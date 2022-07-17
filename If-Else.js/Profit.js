// Question no-11: Aman is buying the apple at price x and selling the same apple to Ankush at price y. Check if Aman is in Profit or Loss.

// Input: Inputs are provided as functional parameters.

// Output: Return the output.

// Eg 1: x = 50, y = 70
// Output: Profit


// Eg 2: x = 50, y = 30
// output : loss

// Note :- If x and y are same then also it is considered as loss.


function determine(x,y){
    // write your code here
  if (y>x){
    return "profit"
  } else {
    return "loss"
  }
  }
  console.log(determine(50,70))
  exports.determine = determine