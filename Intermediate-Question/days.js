function yearMonthDaysSum(num){
    let years = Math.floor(num / 365);
    let months = Math.floor(num % 365 / 30);
    let days = Math.floor(num % 365 % 30);
      let sum = (years+months+days) ;
      return sum ;
    }
    console.log(yearMonthDaysSum(2000)) ;
    exports.yearMonthDaysSum = yearMonthDaysSum