function sumAreaPerimeter(num){
    let area = Math.PI*(num*num) ;
    let pra = 2*Math.PI*num ;
    let sum = area+pra ;
    return sum ;  
  }

  console.log(sumAreaPerimeter(10))
  exports.sumAreaPerimeter = sumAreaPerimeter