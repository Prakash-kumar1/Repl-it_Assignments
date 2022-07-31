// Question Number-5:   Given an object containing the list of shopping items and their respective prices. Returnt the all the items that has been purchased

// Input Format :  An object obj containing items
// Output Format :  Return all the items that has been purchased

// Sample Input:   { "Shampoo": 5.99, "Rubber Ducks": 15.99 }
// Sample Output:  ['Shampoo', 'Rubber Ducks']

// Sample Input:   { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
// Sample Output:  ['Monopoly', 'Secret Hitler', 'Bananagrams']


function shopping(obj){
    let newArray = [] ;
  for(let key in obj){
    newArray.push(key)
  }
     return newArray;
  }
  console.log(shopping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }))
  console.log(shopping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
  exports.shopping = shopping
