// Question no. -2 :Write a program to print the area of a circle by taking the radius as input.

// Constraints
// radius is an integer >= 0


const calculateArea = (radius) => {
    let x = radius;
          return( Math.PI * x * x);
  }
  console.log( calculateArea(4) .toFixed(2));
  exports.calculateArea = calculateArea