const Stack = require('./stack-array')

const decimalToBinary = (decNumber) => {
    const modStack = new Stack()
    let number = decNumber, 
        mod, 
        binaryStr = ''

    while(number){
        mod = number % 2
        number = Math.floor(number / 2)
        modStack.push(mod)
    }

    while(!modStack.isEmpty()){
        binaryStr += modStack.pop() + ''
    }

    return binaryStr
}

const baseConvert = (decNumber, base) => {
    const modStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber,
        mod,
        baseStr = ''
    
    if(base < 2 || base > 36) {
        return ''
    }
    while(number){
        mod = number % base
        number = Math.floor(number / base)
        modStack.push(mod)
    }

    while(!modStack.isEmpty()){
        baseStr += digits[modStack.pop()]
    }

    return baseStr
}

console.log(decimalToBinary(10))
console.log(baseConvert(10, 16))