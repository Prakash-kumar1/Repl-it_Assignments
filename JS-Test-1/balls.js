// Question Number-7 : Radhika wants to calculate the no. of balls present in n boxes. The nth box has n balls inside it, n-1 box has n-1 balls inside it and so on till 1st box. Can you help her to calculate the total no. of balls present in n boxes.

// constraint: 1<=number_of_box<=1000

// Input:  Number of balls is provided as function parameter

// output: total number of balls

// Eg: 5

// output: 15


function totalBalls(n){
    let sum = 0 ;
    for(i=1; i<=n; i++){
      sum = sum+i
    }
    return sum ;
  }
  console.log(totalBalls(5))
  exports.totalBalls = totalBalls