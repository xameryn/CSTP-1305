var addTwoNumbers = function(l1, l2) {
    l1 = l1.reverse().join('')
    l2 = l2.reverse().join('')
    let result = parseInt(l1) + parseInt(l2)
    result.toString().split('').reverse()
    return result
};

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]

console.log(addTwoNumbers(l1, l2)) // [7, 0, 8]