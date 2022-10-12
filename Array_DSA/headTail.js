// ######@@@@@@   DSA  by "code step by step" { video number =>> 12 } ######@@@@@@  


// ######@@@@@@    Head  and  Tail  recursion  ######@@@@@@  

function test(x){
    // console.log(x) ;     //Head - Recursion
    if(x>0){
        test(x-1)
    }
    console.log(x) ;   //Tail - Recursion , line 79 to 81 it will go in call stack , after completeing it's loop 
                       //    it will print . that's  why output is different
}

test(5)


// ######@@@@@@   Uses of  Debugger ######@@@@@@  

function colors(){
    let data = 20 ;
    console.log(data) ;
}
function days(){
    colors() ;
}
function fruits(){
    days() ;
}
function topFunction(){
    fruits() ;
}

topFunction() ;


// Explanation =>>  In call stack , Ist topFunction() go , then  fruits() go ,  then  days() go and after that it 
//                 will go on colors after that data , it will print the data .



// ######@@@@@@    Reversing  Array using  Recursion  ######@@@@@@  

let data = [5,12,65,89,0] ;
let temp ;

function customReverse(data , start , end){
    console.log(data) ;

    if(start <= end){
        temp = data[start] ;
        data[start] = data[end] ;
        data[end] = temp ;
        customReverse(data , start+1 , end-1)
    }
    
}

// function (data , starting value , elements)
customReverse (data , 0 , data.length-1)









