// #######   Example  of  Merging  Two  Arrays  using For Loop ####### 

// Example - 1 =>>
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



// #######   Example  of  Merging  Two  Arrays with  Sorting using  " While  Loop"  ####### 

// Example - 1 =>>
let data1 = [3,7,12,34,56,90]
let data2 = [4,9,25,45]
let data3 = [] ;
let d1 = 0 ;
let d2 = 0 ;
let d3 = 0 ;

while(d1 < data1.length && d2 < data2.length){
    if(data1[d1] < data2[d2]){
        data3[d3] = data1[d1] ;
        // d3++ ;
        d1++ ;
        // console.log(data3[d3]) ; 
    }else{
        data3[d3] = data2[d2] ;
        // d3++ ;
        d2++ ;
        // console.log(data3[d3]) ; 
    }
// on writting d3 two times in line no-44  and  line no-40 , we can also use here
d3++
}
// console.log(data3) ; 

// For last Two Left values
while(d1 < data1.length){
    data3[d3] = data1[d1] ;
    d1++ ;
    d3++ ;
}
console.log(data3) ; 




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

