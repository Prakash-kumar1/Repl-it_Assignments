function aircampus(n){
    let number = n
    let length = n.toString().length
    let sum = 0
    while(n!=0){
      let last_digit
      last_digit = n%10
      sum += last_digit**length
      n = Math.floor(n/10)
    }
    console.log(sum)
    if(number==sum){
      return 'aircampus'
    } else {
      return 'no'
    }
  }
  console.log(aircampus(123))
  exports.aircampus = aircampus
  