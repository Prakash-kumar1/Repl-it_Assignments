// Question no.-25:  Given a number, format the given number by placing commas after thousand place, lakh place, etc. Return the formatted string.

// Input Format  :  Given a strings str
// Output Format :  Return the formatted string

// Sample Input:  100000
// Sample Output:  1,00,000

// Sample Input:  87678567465996
// Sample Output:  8,76,78,56,74,65,996


function putComma(str){
    let comma = '' ;
    var a = str.length-1 - 4 ;
    // console.log(a) ;
    var len = str.length-1 - 2;
    // console.log(len) ;
    
    for(let i=str.length-1;i>=0;i--){
      console.log(str[i]) ;
      comma = str[i]+comma ; 
      if(i===len){
        // console.log(i , 'i') ;
        comma = ',' + comma ;
      } 
      else if(i===a && i !== 0){ 
        comma = ',' + comma ;
        a = a -2; 
      } 
    }
    return comma;
  }
  console.log(putComma('100000'))
  console.log(putComma('87678567465996'))
  exports.putComma = putComma
  
  
  // Logic of - why we using Reverse loop because at the end it diffcult to handle the edge case.
  // 1,23,456
  // 12,34,567
  // forward se\
  // how we can deccide
  // ki hame 1 index ke bad , lagana hai
  // ya 2 index ke bad
  // odd hai ya even hai
  // ager odd hai 1 index pr , lagatyege
  // aur uske bad 1 + 2
  // ,
  // 1,23,456
  // 1,23,45,6
  