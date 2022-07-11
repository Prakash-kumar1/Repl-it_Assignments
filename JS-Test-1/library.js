// Question Number-1 : Accept the number of days from the user and calculate the charge for library according to following :

// Till five days : Rs 0/day.

// Six to ten days : Rs 3/day.

// 11 to 15 days : Rs 4/day

// After 15 days : Rs 5/day

// constraints: 0<=day<=365

// input: Already given as function parameter

// Output: Total charge

// Eg:

// input: 10

// Output: 15


function calculateCharge(number_of_days){
    let num = number_of_days;
    if(num>15){
      return (5*3)+(5*4)+((num-15)*5);
    }
    else if(num>10){
      return(5*3)+((num-10)*4);
    }
    else if(num>5){
      return((num-5)*3);
    }
    else{
      return 0 ;
    }
  }
  console.log(calculateCharge(16))
  exports.calculateCharge = calculateCharge