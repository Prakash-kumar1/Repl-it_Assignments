// Question Number-4:  Given an object containing the quantity of ingridients the chef has. For preparing a food item, the chef requires one quantity of each ingredient. Return how many food items the chef can prepare before he runs out of one of the ingridients

// Input Format :  An object obj containing quantity of each item
// Output Format :  Return the number of food item the chef can prepare

// Sample Input:
// {
//   "salt": 23,
//   "oil": 12,
//   "ketchup": 10
// }
// Sample Output:
// 10
// Sample Input:
// {
//   "salt": 432,
//   "oil": 543,
//   "ketchup": 777
// }
// Sample Output:
// 432



function ingridients(obj){
    let arr = Object.values(obj);
     let min = Math.min(...arr);
     return min ;
   }
   console.log(ingridients({
     "salt": 23,
     "oil": 12,
     "ketchup": 10
   }) );
   exports.ingridients = ingridients
   