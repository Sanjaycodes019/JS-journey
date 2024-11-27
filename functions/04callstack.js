//interview important 
//execution contex, callstack
// global execution contex , functional execution contex
// eval executoin contex ( not much important )

//phases 
// memory creation phase
// execution phase

// let val1 = 10;
// let val2 = 23;
// function addNum(num1, num2){
//     let total = num1 + num2;
//     return total;
// }
// let result1 = addNum(val1, val2);
// let result2 = addNum(23, 32);

// 1) global execution
//  this 
// 2) memory phase
//  val1 -> undefined
//  val2 -> undefined
//  addNum -> defination
//  result1 -> undefined
//  result2 -> undefined

//  3)execution phase
//  val1 -> 10
//  val2 -> 23

// addNum -> new execution contex ( new environment and exection thread )
// memory phase
// val1 = undefined
// val2 = undefined
// total = undefined

//execution contex 
// num1 -> 10
// num2 -> 23
// total -> 33  returned to global executional contex
// now executional contex,deleted
// result1 = 15
// result2 = new executional contex _____same as above

//________________________________________________________________________//


// callstack, LIFO concept
// global environment, exection

function one(){
    console.log("one");
    two();
    }
    function two(){
        console.log("two");
        three();
    }
    function three(){
        console.log("three");
    }

    one();
    two();
    three();

   //output
   // one two three two three three
   