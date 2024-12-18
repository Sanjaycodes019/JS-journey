let numbers = [10, 2, 5, 30, 1];
numbers.sort((a,b)=>(a-b));
console.log(numbers); 

console.log(`the second largest is: ${numbers[numbers.length-2]}`); //prints the second largest