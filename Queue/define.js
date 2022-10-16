/// Definition :  Queue is an type of Linear Data Structure (elements in Sequence like Array , string) .
//                it works on  " First in First out " . 
// there are 2 Queues : (1) => En-Queue :-   Add  item  in  Front of Queue .
//                      (2) => De-Queue :-   Remove  item  in  End of  Queue .


let queue = [] ;
let currentSize = queue.length ;
let maxSize = 5 ;

function enqueue(newVal){
    if(currentSize >= maxSize){
        console.log("Queue is already full.")
    }else{
        queue[currentSize] = newVal ;
        currentSize++ ;
    }
}

function display(){
    console.log(queue) ;
}

function dequeue(){
    if(currentSize > 0){
    for(let i=0 ; i<queue.length ; i++){
    // console.log(queue[i]) ;
        queue[i] = queue[i+1]
    }
    currentSize-- ;
    queue.length = currentSize ;
    }else{
        console.log("Queue is already empty.")
    }
    
}


enqueue(10) ;
enqueue(19) ;
enqueue(150) ;
enqueue("light") ;
enqueue(67) ;
enqueue(32) ;
enqueue(110) ;
enqueue(1) ;

dequeue()
dequeue()
dequeue()
dequeue()
dequeue()
dequeue()

display() ;












