// Question Number-7:  Given an object, return the keys and values as seperate arrays

// Input Format  :  An object obj
// Output Format :  Return keys and values of object as seperate arrays

// Sample Input:   { a: 1, b: 2, c: 3 }
// Sample Output:  [["a", "b", "c"], [1, 2, 3]]

// Sample Input:  { key1: true, key2: false, key3: undefined }
// Sample Output:  [["key1", "key2", "key3"], [true, false, undefined]]



function keyValue(obj){
    let newArray = [] ;
    let data1=[];
    let data2=[] ;
      
    for (x in obj) {
       data1.push(x);
       data2.push(obj[x]);
      // console.log(data1)
      // console.log(data2)
    }
       newArray.push(data1)
      newArray.push(data2)
      return newArray
    }
    console.log(keyValue({ a: 1, b: 2, c: 3 }))
    exports.keyValue = keyValue