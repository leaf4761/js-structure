const fibonacci = []
fibonacci[0] = 1
fibonacci[1] = 1

const n = parseInt(process.argv[2])
for(let i = 2; i< n; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log(fibonacci[n - 1])