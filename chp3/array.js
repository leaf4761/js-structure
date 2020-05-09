class MyArray extends Array{
    insertFirstPosition(value) {
        for(let i = this.length; i >0; i--){
            this[i] = this[i - 1]
        }
        this[0] = value
    }

    removeFirstPostion(){
        for(let i = 0; i< this.length; i++){
            this[i] = this[i + 1]
        }

        return this.reIndex()
    }

    reIndex(){
        let newArr = []
        for(let v of this) {
            if(v){
                newArr.push(v)
            }
        }
        return newArr
    }
}

let arr = new MyArray('1', '2', '3', '4')
arr.insertFirstPosition('100')

console.log(arr)

arr = arr.removeFirstPostion()

console.log(arr)