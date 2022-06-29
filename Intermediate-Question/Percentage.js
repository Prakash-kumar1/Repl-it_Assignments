function percent(num, percentage) {
    let x = (num*percentage)/100 ;
    return x ;
  }
  console.log(percent(400, 50))
  exports.percent = percent