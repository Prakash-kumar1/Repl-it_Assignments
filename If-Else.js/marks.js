// Question no-16:  Write a program to check if the average marks of 5 students is less than 60 or not.

// Input: Inputs are provided as functional parameters.

// Output: Return the answer.

// Eg 1: num1=10,num2=20,num3=30,num4=40,num5=50
// Output: no

// Eg 2: num1=67,num2=72,num3=55,num4=98,num5=86
// Output : yes


function average_marks(num1,num2,num3,num4,num5){
    // write your code here
  if (((num1+num2+num3+num4+num5)/5) < 60){
    return "no"
  } else {
    return "yes"
  }
  }
  console.log( average_marks(67,72,55,98,86))
  exports.average_marks = average_marks