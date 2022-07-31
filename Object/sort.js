// Question Number-9:  Given an array of objects containing drink and their prices, return the array such that the object contains drink with lowest price first.

// Input Format :  An object obj
// Output Format :  Return array such that drinks object is in sorted order on the basis of their price.

// Sample Input:
// [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// Sample Output:
// [
//   {name: "lime", price: 10},
//   {name: "lemonade", price: 50}
// ]


function sorting(obj){
    obj.sort((a, b) => a.price - b.price)
     return obj ;
   }
   console.log(sorting([
     {name: "lemonade", price: 50},
     {name: "lime", price: 10}
   ]))
   exports.sorting = sorting