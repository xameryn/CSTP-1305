console.log('Midterm - 1305')

console.log('\nQ1:')

function findMissingNumber(arr, n) {             // O(nlogn + n) = O(nlogn)
    arr = arr.sort((a, b) => a - b)              // O(nlogn)

    for (let i = 0; i < n; i++) {                // O(n)
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1
        }
    }
}

function findMissingNumberFast(arr, n) {         // O(n) + O(n) = O(n)
    let sum = 0
    let smallest = Infinity

    for (let i = 0; i < n - 1; i++) {            // O(n)
        if (arr[i] < smallest) smallest = arr[i] // O(1)
        sum += arr[i]
    }

    for (let i = smallest + 1; i <= n; i++) {    // O(n)
        smallest += i                            // O(1)
    }

    return smallest - sum
}

console.log('T1a: ' + findMissingNumber([5,4,1,2], 5))                  // 3
console.log('T1b: ' + findMissingNumberFast([5,4,1,2], 5))              // 3
console.log('T2a: ' + findMissingNumber([9,5,3,2,6,1,7,8,10], 10))      // 4
console.log('T2b: ' + findMissingNumberFast([9,5,3,2,6,1,7,8,10], 10))  // 4
console.log('T3a: ' + findMissingNumber([2,3,1,5], 5))                  // 4
console.log('T3b: ' + findMissingNumberFast([2,3,1,5], 5))              // 4
console.log('T4a: ' + findMissingNumber([1,2,3,4,5], 6))                // 6
console.log('T4b: ' + findMissingNumberFast([1,2,3,4,5], 6))            // 6

console.log('\nQ2:')

function findMatchingNumber(arr, target) {                              // O(n^2)
    for (let i = 0; i < arr.length; i++) {                              // O(n)
        for (let j = 0; j < arr.length; j++) {                          // O(n)
            if (i !== j && target === (arr[i] + arr[j])) return [i, j]  // O(1)
        }
    }

    return null
}

console.log('T1: ' + findMatchingNumber([1,5,2,7], 8))                  // [0, 3]
console.log('T2: ' + findMatchingNumber([20,1,5,2,11], 3))              // [1, 3]
console.log('T3: ' + findMatchingNumber([3,2,4], 6))                    // [1, 2]

console.log('\nQ3:')

console.log('skip')

console.log('\nQ4:')

class ListNode {
    constructor(value) {                // O(1)
        this.value = value
        this.next = null
    }
}

function isLoop(head) {                 // O(n)
    slow = head
    fast = head

    while (fast && fast.next) {         // O(n)
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) return true  // O(1)
    }

    return false
}

let head = new ListNode('A')
head.next = new ListNode('B')
head.next.next = new ListNode('C')
head.next.next.next = head

console.log('T1: ' + isLoop(head)) // true

head = new ListNode('1')
head.next = new ListNode('2')
head.next.next = new ListNode('3')

console.log('T2: ' + isLoop(head)) // false

head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = head

console.log('T3: ' + isLoop(head)) // true

console.log('\nQ5:')

function parCheck(s) {                   // O(n)
    let stack = []
    let mappings = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for (let char of s) {                // O(n)
        if (mappings[char]) {            // O(1)
            stack.push(mappings[char])   // O(1)
        }
        else if (char !== stack.pop()) { // O(1)
            return false
        }
    }

    if (stack.length === 0) return true
    
    return false
}
console.log('T1: ' + parCheck('()'))        // true
console.log('T2: ' + parCheck('(){}[]'))    // true
console.log('T3: ' + parCheck('([})'))      // false
console.log('T4: ' + parCheck('[({})]'))    // true