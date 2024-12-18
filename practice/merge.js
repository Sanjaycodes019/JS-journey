let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];

let mergedArray = [...arr1, ...arr2]; // Merge arrays
let newarray = [...new Set(mergedArray)]; //remove duplicate


console.log("Merged Array:", mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Unique Merged Array:", newarray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
