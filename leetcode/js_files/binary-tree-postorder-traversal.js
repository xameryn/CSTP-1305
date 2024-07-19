var postorderTraversal = function(root) {
    let [stack, result] = [[], []]
    
    if (root === null) return result
    
    stack.push(root)
    
    while (stack.length > 0) {
        let node = stack.pop()
        result.unshift(node.val)
        
        if (node.left  !== null) stack.push(node.left)
        if (node.right !== null) stack.push(node.right)
    }
    
    return result
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(postorderTraversal(root)) // [3, 2, 1]