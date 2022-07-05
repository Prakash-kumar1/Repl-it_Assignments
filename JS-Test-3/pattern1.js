// Question no.-4: Display this pattern

let num = 6;
let i,j ;
for(i=1;i<num;i++){
  let stars = '' ;
  for(j=1;j<=i;j++){
    if((i+j)%2 == 0){
      stars += 1 ;
    }else{
      stars += 0 ;
    }
  }
  console.log(stars)
}