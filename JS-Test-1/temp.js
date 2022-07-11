// Question Number-9 : Write a code to take temperature in Fahrenheit and convert it to Celsius.

// C=(F-32)*5/9

// Input: already given as function parameter

// Output: print temperature

// Eg:

// input: 122

// Output: 50


function temperature(temp){
    let C = ( temp-32) * (5/9);
   // make sure you return the answer
   return C ;
 }
 console.log(temperature(122))
 exports.temperature = temperature