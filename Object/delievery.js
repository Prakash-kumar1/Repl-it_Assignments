// Question Number-6: Given an object containing a list of items present in the cart. Find if the order is eligible for free delivery or not. If the order amount is greater than $50.00 it is eligible for free delivery

// Input Format  :  An object obj containing list of items and their prices
// Output Format  :  Return true if order is eligible for free delivery else return false

// Sample Input:   { "Shampoo": 5.99, "Rubber Ducks": 15.99 }
// Sample Output:  false

// Sample Input:  { "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }
// Sample Output:  true


function freeDelivery(obj){
    let count = 0 ;
     for(let x in obj){
       count = count + obj[x] ;
     }
     if(count > 50){
       return true ;
     }else{
       return false
     } 
   }
   console.log(freeDelivery({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
   exports.freeDelivery = freeDelivery