// Q1

strs = ["eat","tea","tan","ate","nat","bat"]
//     [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) { // O(n * (n log n))
    const obj = {}
    const returnArr = []
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = strs[i].split('').sort().join('')
        if (!obj[sortedStr]) {
            obj[sortedStr] = [strs[i]]
        }
        else {
            arr = obj[sortedStr]
            arr.push(strs[i])
        }
    }
    for (key in obj) {
        returnArr.push(obj[key])
    }
    return returnArr
}

console.log(groupAnagrams(strs))

// Q2

strs = ["flower","flow","flight"]
//     "fl"

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ''
    returnPrefix = ''

    for (let i = 0; true; i++) {
        commonPrefix = strs[0][i]
        for (str of strs) {
            if (str[i] !== commonPrefix)
                return returnPrefix
        }
        returnPrefix += commonPrefix
    }

    return returnPrefix;
}

console.log(longestCommonPrefix(strs))

// Q3

// Given the root of a binary tree, determine if it is a valid binary search tree (BST). A BST is valid if for every node, all nodes in its left subtree are less than the node’s value, and all nodes in its right subtree are greater than the node’s value.

// TreeNode class definition
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example BST
const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);

// const root = new TreeNode(2);
// root.left = new TreeNode(1);
// root.right = new TreeNode(3);

function isValidBST(node) {
    function validate(node, low = -Infinity, high = Infinity) {
        if (!node) return true
        if (node.val <= low || node.val >= high)
            return false
        return validate(node.left, low, node.val) && validate(node.right, node.val, high)
    }
    return true
}

console.log(isValidBST(root))

// Q4

// Given a non-empty binary tree, find the maximum path sum. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path sum is the sum of the node values along the path.

//bruh

// Q5

/*
You are given an array prices where prices[i] is the price of a given stock on the i-th day. 
You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock. Return the maximum profit you can achieve from 
this transaction. If you cannot achieve any profit, return 0.
*/

prices = [7,1,5,3,6,4]

function maxProfit(prices) {
    if (prices.length === 0) return 0

    minPrice = Infinity
    maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice)
            minPrice = prices[i]

        const profit = prices[i] - minPrice

        if (profit > maxProfit)
            maxProfit = profit

        // console.log('min', minPrice, 'profit', profit)
    }
    return maxProfit
}

console.log(maxProfit(prices))

// Q6

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// nums = [1,2,3,4,5,6,7], k = 3
//     [5,6,7,1,2,3,4]

const nums = new Array(10000000).fill(0).map(() => Math.floor(Math.random() * 1000));

k = 3

function rotateArray(nums, k) { // O(n)
    newNum = []
    for (let i = 0; i < nums.length; i++) {
        if ((i + k) >= nums.length)
            newNum[i + k - nums.length] = nums[i]
        else
            newNum[i + k] = nums[i]
    }
    return newNum
}

function rotateArrayPrahb(nums, k) { // O(n)
    const n = nums.length;
    k = k % n;
    if (k === 0) return;
    const part1 = nums.slice(-k);
    const part2 = nums.slice(0, n - k);
    nums.splice(0, n, ...part1, ...part2);

    return nums
}

// Q7