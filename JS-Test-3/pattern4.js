// Question no.-7: Display this pattern. 

let num = 5;
let a=1;
let count = 1;
for(let i=1; i<=num; i++){
  let stars = ''
for(let j=1; j<=i; j++){
  stars = `${stars} ${count}`;
  a = a+1
  count=count+a ;
}
  console.log(stars)
}
