var bubbleSort = function(x) {
    let length = x.length - 1;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (x[j] > x[j + 1]) {
                [x[j], x[j + 1]] = [x[j + 1], x[j]];
            }
        }
    }
    return x;
};

let arr = [10, 2, 11, 3, 4, 0]

for (let i = 0; i < 50000000; i++) {
    bubbleSort(arr)
}

console.log(bubbleSort(arr)) // [0, 2, 3, 4, 10, 11]