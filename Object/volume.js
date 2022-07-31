// Question Number-3:  Given an object containing the width length and height of a box. Return the volume of the box

// Input Format :  An object obj containing widht, length and height
// Output Format :  Return volume of the box

// Sample Input:  { width: 7, length: 2, height: 1 }
// Sample Output:   14

// Sample Input:   { width: 4, length: 2, height: 2 }
// Sample Output:   16


function volume(obj){
    let result = obj['width']*obj['length']*obj['height']
      return result ;
    }
    console.log(volume({ width: 7, length: 2, height: 1 }))
    exports.volume = volume