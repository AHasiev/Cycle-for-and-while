let arr = [2, 25, 9, -15, 0, 4, -5, 6, 7, -8];
let accumulator = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        accumulator +=arr[i]
    } 
}
console.log(accumulator);
