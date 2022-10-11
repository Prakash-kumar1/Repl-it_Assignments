// Question no-1 : Print each Number in [1,23,45,67,54,80,35,27,29,77] ??


const data = [1,23,45,67,54,80,35,27,29,77]

for(let i=0 ; i<data.length ; i++){
    console.log(i)    //it gives Index values
    console.log(data[i])    //it gives  values
    console.log(`Array ${i} is ${data[i]} `)
}


// Question no-2 : Insert Element in new Array 

let Array = [60 , 30, 10, 67 , 40] ;
let newEl = 70 ;
let position = 2 ;
console.log(Array) ;

for(let i = Array.length-1 ; i>=0 ; i--){
console.log(Array[i]) ;       //printing in Reverse

if(i >= position){
    Array[i+1] = Array[i] ;
    // console.log(Array[i]) ;
    if(i == position){
        Array[i] = newEl ;
    }
}
}
console.log(Array) ;



// Question no-3 : Delete Element in new Array 

let nums = [10, 35, 67, 89, 29, 46, 21 , 99]
let pos = 3 ;

for(let i=pos ; i<nums.length-1; i++){
    // console.log(nums[i]) ; 

    nums[i] = nums[i+1] ;
    // console.log(nums[i]) ; 

}
 nums.length = nums.length-1 ;
 console.log(nums) ; 









