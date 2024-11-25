//date and time in js
// single moment, january 1st 1970, UTC (the epoch) (predefined)
//calculated in milisecond

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// //can use other functions too
// console.log(typeof(myDate)); 
//  //object

//  //months starts from zero in js if written in single digit


//  //declaring date in js

//  let newDate = new Date( 2004, 1, 28, 21, 0);
//  console.log(newDate);


//  let newDateb = new Date("2004-02-28"); 
//  console.log(newDateb);

//  let mytimestamp = Date.now();
//  console.log(Math.floor(Date.now()/1000));


let newDate = new Date();

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ""
})


