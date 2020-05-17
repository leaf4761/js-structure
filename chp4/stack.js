const _items = Symbol('stackItems')
const items1 = Symbol('stackItems')

console.log(_items === items1)

class Stack {
    constructor() {
        this._count = 0
        this[_items] = {}
    }

    push(element) {
        this[_items][this._count++] = element
    }

    size(){
        return this._count
    }

    isEmpty() {
        return this._count === 0
    }

    pop() {
        if(!this.isEmpty()){
            const item = this[_items][--this._count]
            delete this[_items][this._count]
            return item
        }
        return null
    }

    peek(){
        if(!this.isEmpty()){
            return this[_items][this._count - 1]
        }
        return null
    }

    clear() {
        this[_items] = {}
        this._count = 0
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let str = `${this[_items][0]}`
        for(let i = 1; i < this._count; i++){
            str = `${str}, ${this[_items][i]}`
        }
        return str
    }
}

const stack = new Stack()
stack.push(10)
console.log(stack)

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack[_items])

console.log(Object.getOwnPropertySymbols(stack))

module.exports = Stack