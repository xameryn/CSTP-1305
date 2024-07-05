var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.keys = []
}

LRUCache.prototype.get = function(key) {
    var value = -1
    if (this.cache.has(key)) {
        value = this.cache.get(key)
        this.keys = this.keys.filter(k => k !== key)
        this.keys.push(key)
    }
    return value
}

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.set(key, value)
        this.keys = this.keys.filter(k => k !== key)
        this.keys.push(key)
    } 
    else {
        if (this.cache.size === this.capacity) {
            const keyToRemove = this.keys.shift()
            this.cache.delete(keyToRemove)
        }
        this.cache.set(key, value)
        this.keys.push(key)
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */