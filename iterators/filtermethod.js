//for each methods

// const coding = [ 'js', 'python', 'java', 'cpp', 'ruby'];
// const values = coding.forEach( (item)=> {
//     console.log(item);
// })

// console.log(values);

//for each doesn't return values

// // filter basics
// const myNums = [ 1, 2, 3, 4, 5, 6, 7];

// const newnums = myNums.filter((num)=> num>4);
// console.log(newnums);


 const myNums = [ 1, 2, 3, 4, 5, 6, 7];

// const newnums = myNums.filter((num)=> {
//     return num>4; //return is compulsury when score{} used;
// })
// console.log(newnums);


// const newnums = [];
// myNums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num);
//     }
// })
// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011 }
  ];

//   const userBooks = books.filter( (bk)=> bk.genre ==='History')
const userBooks = books.filter( (bk)=> bk.edition > 2010);
  console.log(userBooks);