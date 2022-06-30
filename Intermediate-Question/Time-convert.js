function time(seconds){
    let hrs = Math.floor(seconds / 3600);
    let min =  Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds - (hrs * 3600) - (min * 60);
     // sec = Math.round(sec * 100) / 100 ;
    return(`${hrs}:${min}:${sec}`) ;
  }
  console.log(time(2000)) ;
  exports.time = time ;
  