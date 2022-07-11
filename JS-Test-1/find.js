// Question Number-6: Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// constraint: 0<=both numbers <=10000

// Input:  Both number are given as function paramter

// Output: A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Case 1:  10 20

// Output:  0

// Case 2:  30 40

// Output: 40


function product(a,b){
    let p = 1
    for(let i=a;i<=b;i++){
      let second_last=Math.floor((i%100)/10) ;
      if(i%2==0 && second_last==4){
        p = p * i
       // return i ;
      }
    }  
    if(p==1){
      return 0 ;
    } else {
    return p ;
    }
    } 
    console.log( product(30,40))
    console.log( product(10,20))
    exports.product = product