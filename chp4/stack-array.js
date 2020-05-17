const _items = Symbol('stackItems')

class Stack {
    constructor() {
        this[_items] = []
    }

    push(element) {
        this[_items].push(element)
    }

    pop() {
        return this[_items].pop()
    }

    peek(){
        if(!this.isEmpty()){
            return this[_items][this[_items].length - 1]
        }
        return null
    }

    isEmpty(){
        return this[_items].length === 0
    }

    clear() {
        this[_items] = []
    }

    size() {
        return this[_items].length
    }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(1)
console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)

stack.pop()
stack.pop()
console.log(stack.size())
console.log(stack)

module.exports = Stack