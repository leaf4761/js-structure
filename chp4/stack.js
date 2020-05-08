class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {
        this.items[this.count++] = element
    }

    size(){
        return this.count
    }

    isEmpty() {
        return this.count === 0
    }

    pop() {
        if(!this.isEmpty()){
            const item = this.items[--this.count]
            delete this.items[this.count]
            return item
        }
        return null
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.count - 1]
        }
        return null
    }

    clear() {
        this.items = {}
        this.count = 0
    }

    toString(){
        if(this.isEmpty()){
            return ''
        }
        let str = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            str = `${str}, ${this.items[i]}`
        }
        return str
    }
}

const stack = new Stack()
stack.push(10)
console.log(stack)

console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)