const myNums = [ 1, 2, 3];

// const total = myNums.reduce( (acc , curval)=>{
//     console.log(`acc: ${acc} and current value ${curval}`);
//     return acc + curval;
// }, 0)
// console.log(`the total value is ${total}`);


const total = myNums.reduce( (acc , curval)=> acc+curval, 0)
console.log(`the total value is ${total}`);