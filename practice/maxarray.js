let arr = [ 1, 2, 4, 6, 7, 3, 0, 7];
let max = 0;
for ( let i = 0; i < arr.length; i++){
    if(arr[i]>max){
        max = arr[i];
    }
}
console.log(`the maximum element of this array is: ${max}`);