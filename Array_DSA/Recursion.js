// Recursion Definition : A function calling itself again and again . 

// Printing From  0 to 10  using  Recursion ??
function apple(x){
    console.log(x) ;
    if(x < 10){
        apple(x+1) ;
    }
}
let data = 0 ;
apple(data) ;


// Printing From  0 to 10  using  Recursion ??
function orange(x){
    console.log(x) ;
    if(x > 0){
        orange(x-1) ;
    }
}
let data1 = 10 ;
orange(data1) ;


// Printing  Factorial  using  Recursion ??

function factorial(item){
    if(item == 0){
        return 1
    }
    return item * factorial(item-1)
}
let data2 = 4 ;
console.log(factorial(data2))


// Printing  string items using While loop

let Array = ["Iron-man" , "spider-man" , "vision" , "Dr. Strange" , "Black panther"]
let i =0 ;
while(i<Array.length){
    console.log(Array[i]) ;
    i++ ;
}





















