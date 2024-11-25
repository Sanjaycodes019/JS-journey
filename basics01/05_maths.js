// //numbers and maths 
// const score = 500.56789;
// console.log(score); 
// console.log(typeof(score)); //the type is number
// console.log(score.toString()); //converts into string



// const balance = new Number(2300);
// console.log(balance); //specifically number

// console.log(score.toFixed(3));

// const money  = 200000000000000000;
// console.log(money.toLocaleString()); //comma seperated 100s in us standard
// console.log(money.toLocaleString('en-IN')); //comma seperated 100s in indian standard


//_______________________________________________________________________________________
// maths ( which is in js by default )

// console.log(math); //its a object by default 

// console.log(Math.round(34.4));
// console.log(Math.floor(4.99));
// console.log(Math.min(3, 5, 4, 7, 9));
// console.log(Math.max(3, 5, 4, 7, 9, 10));

console.log(Math.random()); // random value from 0-1 
console.log(Math.random()*100); // random value from 0-1, multiplied by 100

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * ( max - min + 1 )) + min )) //value between min and max
                                        //range


                                        