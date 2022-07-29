// Question no.-16: Given a strings, return all the characters of string separated by comma (,)

// Input Format : Given a strings str
// Output Format : Return the comma seperated string.

// Sample Input:  aircampus
// Sample Output:  a,i,r,c,a,m,p,u,s

// Sample Input:  javascript
// Sample Output:  j,a,v,a,s,c,r,i,p,t

function commaSep(str){
    let strans='' ;
       for(i=0;i<str.length;i++){
         strans=strans+','+str[i]
       }
        return strans.slice(1)
   }
   console.log(commaSep('aircampus')) ;
   exports.commaSep = commaSep
   
   
   //   OR Use this way 
   
   
   function commaSep(str){
      return str.split('').join(',')
   }
   console.log(commaSep('javascript')) ;
   exports.commaSep = commaSep