// Question No.-1 : Take two numbers as input perpendicular and base respectively and write a program to print the hypotenuse of the right angle triangle.


const hypotenuse = (perpendicular, base) => {
    let  hypo = Math.sqrt((perpendicular**2)+ (base**2));
     return  hypo ;
   }
   console.log( hypotenuse  (3 , 4))
   console.log( hypotenuse  (6 , 8))
   exports.hypotenuse = hypotenuse;