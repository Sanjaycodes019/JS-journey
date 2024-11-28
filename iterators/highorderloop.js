// // for of loop
// const arr = [ 1, 2, 3, 4, 5, 5, 6];

// for ( const num of arr){
//     console.log(num);
// }

// same loop on string

// const greeting = 'hello world!';
// for ( const greet of greeting){
//     console.log(`each character is: ${greet}`);
// }
// console.log(`the length is: ${greeting.length}`);


// // map, object holds key-value pair, unique values

// const map = new Map();
// map.set('NP', 'NEPAL');
// map.set('NP', 'NEPAL');
// map.set('IN', 'India');
// map.set('Es', 'Estonia');
// map.set('Pk', 'Pakistan');
// map.set('Bhu', 'Bhutan');
// map.set('Bg', 'Bangladesh');
// console.log(map);
// for (const [key, value] of map){
//    console.log(key, ':-', value);
// }

// const myObj = {
//     'game1': 'nfs',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObj){
//     console.log(key, ':-', value);
// } //myObj is not iteratable

//______________________________________________________________________//


//  const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple'
//  }

//  for ( const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
//  }



//for in loop in array

// const programming = [ 'js', 'rb', 'php', 'java', 'cpp'];
// for(const key in programming){
//     console.log(programming[key]);
// } //works, key comes first, unlike for of loop

// array key default starts by 0 


// const map = new Map(); //map is not iteratable
// map.set('NP', 'NEPAL');
// map.set('NP', 'NEPAL');
// map.set('IN', 'India');
// map.set('Es', 'Estonia');
// map.set('Pk', 'Pakistan');
// map.set('Bhu', 'Bhutan');
// map.set('Bg', 'Bangladesh');

// for ( const key in map ){  //loop not possible
//     console.log(key);
// }

