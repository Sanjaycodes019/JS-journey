// //depth

// const marvel_heroes = ["thor","ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

// // marvel_heroes.push(dc_heros);

// // console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allheroes = marvel_heroes.concat(dc_heros);
// // console.log(allheroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// //to spread the array

// const spreaded = [...marvel_heroes, ...dc_heros];
// console.log(spreaded);


const newarr = [ 2, 3, [3, 4, 5,[1, 1, 1], 8 ], [4, 5, 7], 4, 9];
const realarray = newarr.flat(Infinity);
console.log(newarr);
console.log(realarray);

console.log(Array.from("sanjay")); //converts that string to array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));