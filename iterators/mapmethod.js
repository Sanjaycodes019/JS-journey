const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8];
// const newNums = myNums.map( (num)=> num+10);
// console.log(newNums);

// adds 10 to each element of the array

//____________________________________________________________________________//

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 ) 
                .filter( (num)=> num>=40 )
    console.log(newNums);