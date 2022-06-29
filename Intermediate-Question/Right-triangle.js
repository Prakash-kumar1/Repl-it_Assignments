const hypotenuse = (perpendicular, base) => {
    let  hypo = Math.sqrt((perpendicular**2)+ (base**2));
     return  hypo ;
   }
   console.log( hypotenuse  (3 , 4))
   exports.hypotenuse = hypotenuse;