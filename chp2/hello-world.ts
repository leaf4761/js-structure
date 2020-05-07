let myName = 'test'
// myName = 10

let age: number = 10
let existsFlag: boolean = false
let language: string = 'javascript'

interface Person {
    name: string
    age: number
}

function printName(person: Person) {
    console.log(person.age)
}

const john = {
    name: 'John',
    age: 21
}

const mary = {
    name: 'mary',
    age: 21,
    phone: '123'
}

printName(john)
printName(mary)

interface Comparable<T> {
    compareTo(b: T): number
}

class MyObject implements Comparable<MyObject> {
    age: number

    compareTo(obj: MyObject): number {
        if (this.age === obj.age) {
            return 0
        }

        return this.age > obj.age ? 1 : -1
    }
}

const obj1 = new MyObject()
obj1.age = 10
const obj2 = new MyObject()
obj2.age = 100
console.log(obj1.compareTo(obj2))