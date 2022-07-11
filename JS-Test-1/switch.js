// Question Number-5: Use Switch case:  No if else is allowed.
// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"  if there are two numbers same as biggest than also print "None of them is biggest"

// Eg: 10 30 20
// Output: 30

// Eg: 11 22 22
// Output :  "None of them is biggest"


function biggest(a,b,c){
    switch (a>b && a>c) {
      case true:
        return a;
        break;
    }
      switch (b>a && b>c) {
      case true:
        return b;
        break;
    }
      switch (c>a && c>b) {
      case true:
        return c;
        break;
    }
      switch (a==b || b==c || a==c) {
      case true:
        return "None of them is biggest";
        break;
    }
    }
    console.log(biggest(10,30,20))
    console.log(biggest(109,310,1210))
    exports.biggest = biggest
    