// Question no.-8 : Take a number and convert it to year, months and days. Result: sum of Years months + remaining Days 

function yearMonthDaysSum(num){
    let years = Math.floor(num / 365);
    let months = Math.floor(num % 365 / 30);
    let days = Math.floor(num % 365 % 30);
      let sum = (years+months+days) ;
      return sum ;
    }
    console.log(yearMonthDaysSum(2000)) ;
    exports.yearMonthDaysSum = yearMonthDaysSum