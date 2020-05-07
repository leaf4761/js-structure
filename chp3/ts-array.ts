interface Person{
    age: number
    name: string
}

const friends: Person[] = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25}
]

function comparePerson(p1: Person, p2: Person){
    return p1.age - p2.age
}

friends.sort(comparePerson)

console.log(friends)