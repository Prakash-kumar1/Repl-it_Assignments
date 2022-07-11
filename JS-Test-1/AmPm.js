// Question number-3: Take a time in 24 hour fomrat and onvert it to 12 hour format. Also if hour or minute is of single digit add "0" before it

// Input:  hour and min will be provided as two different parameters in function

// output:  time in 12 hour format with AM and PM written

// eg:  hour = 13 min = 56

// output:  1:56 PM

// Note: there is a space between 1:56 and PM

// eg: 2  hour = 7 min = 25

// output:  07:25 AM

// Note: "0" has been added before 7 as it was single digit


function amPm(hr,min){
    if(hr==0){
      min = min<10 ? "0"+min: min;
      hr = hr<10 ? "0"+ hr: hr;
        return('12:'+min+' AM')
   }
    else if(hr>=12){
      hr=hr-12;
       min = min<10 ? "0"+min: min;
      hr = hr<10 ? "0"+ hr: hr;
      if (hr==0){
        return('12:'+min+' PM')
      } else{
        return(hr+':'+min+' PM')
      }
    }
    else{
       min = min<10 ? "0"+min: min;
      hr = hr<10 ? "0"+ hr: hr;
       return(hr+':'+min+' AM')
    }
  
  }
  console.log(amPm(12,34))
  exports.amPm = amPm
  