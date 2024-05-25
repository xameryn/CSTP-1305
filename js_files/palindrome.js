var isPalindromeV1 = function(x) { // 15s
    if (x == x.toString().split('').reverse().join('')) return true
    return false;
};

var isPalindromeV2 = function(x) { // 0.7s
    if (x < 0) return false;

    const input = x.toString()
    let i = 0
    let j = input.length - 1
    
    while (j > i) {
        if (input[i] !== input[j]) return false
        i++
        j--
    }
    return true
};

for (let i = 0; i < 10000000; i++) {
    isPalindromeV2(1221)
    isPalindromeV2(10)
    isPalindromeV2(-101)
}

console.log(isPalindromeV2(1221)) // true
console.log(isPalindromeV2(10)) // false
console.log(isPalindromeV2(-101)) // false