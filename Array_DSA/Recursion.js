// // Recursion Definition : A function calling itself again and again . 

// // Printing From  0 to 10  using  Recursion ??
// function apple(x){
//     console.log(x) ;
//     if(x < 10){
//         apple(x+1) ;
//     }
// }
// let data = 0 ;
// apple(data) ;


// // Printing From  0 to 10  using  Recursion ??
// function orange(x){
//     console.log(x) ;
//     if(x > 0){
//         orange(x-1) ;
//     }
// }
// let data1 = 10 ;
// orange(data1) ;


// // Printing  Factorial  using  Recursion ??

// function factorial(item){
//     if(item == 0){
//         return 1
//     }
//     return item * factorial(item-1)
// }
// let data2 = 4 ;
// console.log(factorial(data2))


// // Printing  string items using While loop

// let Array = ["Iron-man" , "spider-man" , "vision" , "Dr. Strange" , "Black panther"]
// let i =0 ;
// while(i<Array.length){
//     console.log(Array[i]) ;
//     i++ ;
// }


// // There  are  2  types  of recursion 
// // (1) =>  Direct  Recursion :- there is one Function calling itself .
// // (2) =>  In-Direct  Recursion :-  there is 2 Function calling itself on the base of conditions .

// // Example of In-Direct Recursion :- 
// let money = 100 ;
// let banana = 0 ;

// function buyBanana(y) {
//     // console.log(y) ;
//     if(y > 0){
//         console.log("I have " , y , "RS" , banana ,"banana")
//         buyMore(y) ;
//     }else{
//         console.log("Don't buy more Banana , money fully spend" , banana)
//     }
    
// }

// function buyMore(y){
//     banana++ ;
//     buyBanana(y - 20)
//     console.log("buy more bananas" , y)
// }
// buyBanana(money) ;


// // ######@@@@@@  Interview  Questions  ######@@@@@@  


function test(x){
    // console.log(x) ;     //Head - Recursion
    if(x>0){
        test(x-1)
    }
    console.log(x) ;   //Tail - Recursion , line 79 to 81 it will go in call stack , after completeing it's loop 
                       //    it will print . that's  why output is different
}

test(5)










