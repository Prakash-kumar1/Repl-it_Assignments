// Question no-15: Write a program to display "Hello" if a number entered by the user is a multiple of five , otherwise print "Bye".

// Input: Input is provided as functional parameter.

// Output: Return comma seperated quotient and remainder.

// Eg 1: 10
// Output: "Hello"

// Eg 2: 7
// Output : "Bye"

function hello_bye(num){
    // write your code here
  if (num%5 == 0){
    return  ("Hello")
  } else {
    return ("Bye")
  }
  }
  console.log(hello_bye(75))
  console.log(hello_bye(7))
  exports.hello_bye = hello_bye