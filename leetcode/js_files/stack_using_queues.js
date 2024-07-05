var MyStack = function() {
    this.primaryQueue = []
    this.secondaryQueue = []
};

MyStack.prototype.push = function(x) {
    this.secondaryQueue.push(x)
    while (this.primaryQueue.length > 0) {
        this.secondaryQueue.push(this.primaryQueue.shift())
    }

    [this.primaryQueue, this.secondaryQueue] = [this.secondaryQueue, this.primaryQueue]
};

MyStack.prototype.pop = function() {
    return this.primaryQueue.shift()
};

MyStack.prototype.top = function() {
    return this.primaryQueue[0]
};

MyStack.prototype.empty = function() {
    return this.primaryQueue.length === 0
}

var obj = new MyStack()

console.log(obj)

var x = 1

obj.push(x)

console.log(obj)

var param_2 = obj.pop()

console.log('param_2: ' + param_2)
console.log(obj)

var param_3 = obj.top()

console.log('param_3: ' + param_3)
console.log(obj)

var param_4 = obj.empty()

console.log('param_4: ' + param_4)
console.log(obj)