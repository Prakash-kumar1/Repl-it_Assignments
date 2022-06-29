// Question no.-3: Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are given.


const area = (a, b, c) => {

    let s = (a+b+c)/2;
    let x = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return x;
  }
  console.log(area  (3, 4, 5))
  exports.area = area;