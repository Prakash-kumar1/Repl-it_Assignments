
//  ###########==>>  Array  Sorting  with  Bubble  sort  <<==###########

// In algoritms , sorting always depends on element size .

let data = [40,30,12,25] ;

for(i=0;i<data.length; i++){
    // console.log(i) ;
    for(j=0;j<data.length; j++){
        // console.log(j) ;
        if(data[j] > data[j+1]){
// Swapping  the  values
            let temp = data[j]   ;
            data[j] = data[j+1]  ;
            data[j+1] = temp  ;
        }
    }
}


//  ###########==>> For DSA use , " javapoint.com "  <<==###########


// Space - Complexicity :-  How much our program takes space in memory .OR   the Space - Complexicity is the
//                          amount of space required to solve a Problem .
//             ( Space - Complexicity =  Auxilliary  space  +  Input size )


// Time - Complexicity :-  In How many lines we have written our program.  OR   the Time - Complexicity is mainly
//                         calculated by counting the number of steps to finish the execution .  Time - Complexicity 
//                         directly  depends on Input . 

// Big O Notation :  use to denote  both Complexicity .

// Definition  of   Asymptotic  analysis ==>>:-  Asymptotic  analysis check which algorithm is better to use .


//  ###########==>> For DSA use , " javapoint.com "  <<==###########






















