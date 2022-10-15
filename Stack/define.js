// Definition :  Stack is an type of Linear Data Structure (elements in Sequence like Array) . 
//            stack works on LIFO (Last in First out).  In  Stack  and  Queue , we fixed the number of elements 


//Stack Operations:- push(adding new element) , pop (removing element) , isEmpty , Peak(maximum value) , print .

let data = [] ;
let currentSize = data.length ;
let max = 5 ;

function push(newVal){
    if(currentSize >= max){
        console.log("Stack is full you can't add" , newVal)
    }
    data[currentSize] = newVal ;
// for increasing the size
    currentSize+=1 ;
}

function pop(){
    if(currentSize > 0){
        currentSize -= 1 ;
        data.length = currentSize ;
    }else{
        console.log("Stack is empty")
    }
}
push(20) ;
push(30) ;
push(120) ;
push(2) ;
push(26) ;
push(19) ;
push(69) ;
push(31) ;
pop() ;
pop() ;
pop() ;
push(49) ;
push("Light") ;
console.log(data) ;
console.log(data.length) ;























