// Question Number-10 :  Write a code to take time in seconds and convert it into hour, mins and seonds

// Input:  already given as function parameter

// Output:  hour, mins and seconds with a message as in example.

// input:  5000

// Output:  In 5000 seconds 1 hours , 23 minutes and 20 seconds are possible


function time(seconds){
    let hrs = Math.floor(seconds / 3600);
      let min =  Math.floor((seconds - (hrs * 3600)) / 60);
      let sec = seconds - (hrs * 3600) - (min * 60);
       sec = Math.round(sec * 100) / 100 ;
      // return ?
       return(`In ${seconds} seconds ${hrs} hours , ${min} minutes and ${sec} seconds are possible`) ;
    }
    console.log(time(5000)) ;
    exports.time = time