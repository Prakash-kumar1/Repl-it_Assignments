// Question no.-4: Display this pattern


let i,j ;
  for(i=1; i<=5; i++){
    let stars = '' ;
  for(j=i; j<=5; j++){
    stars += j
  }
    for(j=1; j<=i-1; j++)
      {
        stars += j
      }
    console.log(stars)
}