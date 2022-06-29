const calculateArea = (radius) => {
    let x = radius;
          return( Math.PI * x * x);
  }
  console.log( calculateArea(4) .toFixed(2));
  exports.calculateArea = calculateArea