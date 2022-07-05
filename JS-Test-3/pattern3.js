// Question no.-5: Display this pattern

let m = 5, n = 6;
let str = "";
for(i=1; i<=m; i++){
  str = "";
  for(let j =1; j<=n; j++){
    if(i==1 || j===1|| i == m || j ==n){
      str += "8 "
    }else if((j == 2 || j == n-1) && i != Math.ceil(m/2)){
      str += "8 "
    } else{
      str += "  ";
    } 
  }
  console.log(str);
}
