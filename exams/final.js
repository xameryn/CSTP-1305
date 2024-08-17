console.log('Final - 1305')

// Q1

console.log('\nQ1:')

function reverseInt(input) {
    return parseInt((input < 0 ? '-' : '') + input.toString().replace('-','').split('').reverse().join(''))
}

console.log(reverseInt(123))  //  321
console.log(reverseInt(-456)) // -654

// Q2

console.log('\nQ2:')

function findTarget(arr, target) { // O(n)
    if (arr.length === 0) return 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            return i
        if (arr[i] < target && arr[i + 1] > target) {
            return i + 1
        }
    }
}

console.log(findTarget([1,3,5,6], 4)) // 2
console.log(findTarget([1,3,5,6], 2)) // 1

// Q3

console.log('\nQ3:')

class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function displayList(head) {
    outputArr = []
    outputArr.push(head.value)
    while (head.next !== null) {
        outputArr.push(head.next.value)
        head = head.next
    }
    console.log(outputArr.join(', '))
}

function removeNode(node) { // O(n)
    while (true) {
        node.value = node.next.value
        node = node.next
        if (node.next.next === null) {
            node.value = node.next.value
            node.next = null
            return
        }
    }
}

let head = new ListNode(4)
let A = head.next = new ListNode(5)
let B = A.next = new ListNode(1)
let C = B.next = new ListNode(9)

removeNode(A)
displayList(head) // 4, 1, 9

head = new ListNode(4)
A = head.next = new ListNode(5)
B = A.next = new ListNode(1)
C = B.next = new ListNode(9)

removeNode(head)
displayList(head) // 5, 1, 9

// Q4

console.log('\nQ4:')

function findDupes(arr) { // O(n)
    obj = {}
    hasNeg = false
    lowestDupe = null

    for (num of arr) {
        if (!obj[num])
            obj[num] = 1
        else {
            if (num < 0) hasNeg = true
            obj[num]++
        }
    }

    for (key in obj) {
        if (obj[key] > 1) {
            if (!hasNeg)
                return key
            else
                lowestDupe = key
        }
    }

    return lowestDupe
}

console.log(findDupes([4,10,5,1,11,5,1,4,1])) // 1
console.log(findDupes([1,10,1,-1,10,-1]))     // -1

// Multiple Choice

// Which type of search is efficient on a sorted array?
// B) Binary Search

// What is the time complexity of inserting a new node at the beginning of a singly linked list?
// B) O(1)

// In a binary search tree (BST), the left child of a node is always:
// B) Smaller than the node

// Which traversal of a BST visits nodes in ascending order?
// C) In-order

// In a doubly linked list, what does the prev pointer in the first node point to?
// B) Null