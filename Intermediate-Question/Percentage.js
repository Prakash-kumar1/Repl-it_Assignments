// Question no. - 5: Take input a as a number and b as percentage. Write a program to calculate the percentage of a number.


function percent(num, percentage) {
    let x = (num*percentage)/100 ;
    return x ;
  }
  console.log(percent(400, 50))
  console.log(percent(20, 5))
  exports.percent = percent