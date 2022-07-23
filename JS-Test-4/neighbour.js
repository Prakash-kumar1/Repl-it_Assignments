// Question Number -6: Mary wants to distribute pens to all the kids in her neighbourhood. Can you help her by creating an array where all the kids except her neighbour get 'm' number of pens and her neighbour kids get 'm+5'. Please note she doesn't have a kid.

// Input Format : Three numbers m ,n and pos. Here m is the number of pens, n is the number of houses with kids and pos is where Mary lives.

// Output Format : Return the output array.

// Sample Input:  m = 5 n=10 pos = 2
// Sample Output:  [5,10,0,10,5,5,5,5,5,5]


function neighbours(m,n,pos){
    let givePens = [] ;
   
   for(let i=0; i<n; i++){
     givePens.push(m);
   if(givePens[i] == givePens[pos]){
     givePens.splice(i,1,0)
   }
     if(givePens[i] == givePens[pos - 1]){
     givePens.splice(i,1,m+5)
   }
     if(givePens[i] == givePens[pos + 1]){
     givePens.splice(i,1,m+5)
   }
   }
     return givePens ;
   }
   console.log(neighbours(1,5,2))
   exports.neighbours = neighbours