// Question number: - 3 :Take a number and check whats the minimum number of digits that need to be changed to make it pallindrome.

// A pallindrome is a number which if reversed is equal to original number.

// input:

// Number will be given as paramter:

// Ouput: minimum number of change

// Eg: 14321

// output:

// 1

// Explanation:

// If we change 4 to 2 or 2 by 4 number will become pallindrome

// Eg:

// 12345

// ouput:

// 2


function pallindrome(str){
    let n=str
      rev=0;
      count=0
      while(n!=0){
        x=n%10;
        rev=rev*10+x
        n=Math.floor(n/10)
      }
      // console.log(rev)
      //  console.log(str)
      if(rev==str){
        return 0
      }
      
      while(rev!=0 && str!=0) {
        a=rev%10;
        b=str%10;
        if(a!=b){
          count++
        }
        rev=Math.floor(rev/10)
        str=Math.floor(str/10)
      }
      return (count/2)
  }
  console.log( pallindrome(12345))
  exports.pallindrome=pallindrome

