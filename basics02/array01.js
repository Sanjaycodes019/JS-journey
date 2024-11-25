// //array is object in js, and are resizeable
// const myArr = [ 0 , 1, 2, 3, 4, 5];
//  console.log(myArr[5]);

//  // array in js are shallow copy ( same reference point, original array modified)

//  //arrayMethods

//  const myHeros = [ "shaktiman", "superman", "ironman"];
//  console.log(myHeros[2]);

//  myArr.push(7);
//  myArr.push(3);
//  myArr.push(9);
//  console.log(myArr);
 
//  myArr.pop();

//  console.log(myArr);

//  myArr.unshift(7); //puts the element in the first index of the array
//  console.log(myArr);

//  myArr.shift(); //removes the first element of the array
//  console.log(myArr);


//  console.log(myArr.includes(7)); //true cause 7 is inside the array

//  const newArr = myArr.join();

//  console.log(newArr);  // removes the outside box and changes the type to string


// slice and splice
console.log("slice");
const myArr = [ 0 , 1, 2, 3, 4, 5];

console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // cuts the value from index 1 to 3, 3 index not included
console.log(myn1);
console.log("B", myArr); //original array remains same


console.log("splice");
console.log("A", myArr);
const myn2 = myArr.splice(1, 3); // cuts the value from index 1 to 3, 3 index included
console.log(myn2);
console.log("B", myArr); //the spliced value is removed from the original value