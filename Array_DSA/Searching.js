// Question no-1 : Search Number and index value in [1,23,45,67,54,80,35,27,29,77] ??

// #######   Example  of  Linear  Search   ####### 

const data = [1,23,45,67,54,80,35,27,29,77]
let item = 67 ;
let index = undefined ;

for(i=0 ; i<data.length ; i++){
    // console.log(data[i]) ;
    if(data[i] === item){
        console.log("item is present")
        index = i ;
        break ;
    }
}
console.log(index) ;



// #######   Example  of  Merging  Two  Arrays   ####### 

let data1 = [1,23,45,67,54,80,35,27,29,77]
let data2 = [10,20,30,40,50,60,70]
let data3 = [] ;

for(i=0 ; i<data1.length; i++){
    // console.log(data1[i]) ;
// storing data1 values in data3[] 
    data3[i] =  data1[i]
    // console.log(data3[i]) ; 
}

for(i=0 ; i<data2.length; i++){
    // console.log(data2[i]) ;
// adding data1 values in new indexes
    data3[data1.length + i] =  data2[i]
   
}
console.log(data3) ; 









