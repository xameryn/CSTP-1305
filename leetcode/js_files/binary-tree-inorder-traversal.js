var inorderTraversal = function(root) {
    let [stack, result] = [[], []]
    
    if (root === null) return result
    
    let node = root
    
    while (node !== null || stack.length > 0) {
        while (node !== null) {
            stack.push(node)
            node = node.left
        }
        
        node = stack.pop()
        result.push(node.val)
        node = node.right
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

console.log(inorderTraversal(root)) // [1, 3, 2]