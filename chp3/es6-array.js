const numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// for(const n of numbers){
//     console.log(n % 2 ===0 ? true: false)
// }

let iterator = numbers[Symbol.iterator]()
console.log(iterator)
console.log(iterator.next())
for (const n of iterator) {
    // console.log(n)
}

let entries = numbers.entries()
console.log(entries)

for (const n of entries) {
    // console.log(n)
}

let keys = numbers.keys()
console.log(keys.next())

class IterTest {
    constructor(myArray) {
        this.arr = myArray
        this.len = this.arr.length
        this.index = 0
    }

    next() {
        let value, done
        value = this.arr[this.index++]

        if (this.index < this.len) {
            done = false
        } else {
            done = true
        }


        return {
            value,
            done
        }
    }
}

var a = [2, 3, 4, 5, 6]
var iter = new IterTest(a)
console.log(iter.next())
console.log(iter.next())

let evens = Array.from(a, x => (x % 2 === 0))
let b = Array.from(a)
console.log(evens)
console.log(b)

let copyArray = [1, 2, 3, 4, 5, 6]
copyArray.copyWithin(0, 4)
console.log(copyArray)

console.log(a.sort((a, b) => b - a))

names = ['Ana', 'ana', 'john', 'John']; // 重置数组的初始状态
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));

console.log(numbers.includes(-4, 1))