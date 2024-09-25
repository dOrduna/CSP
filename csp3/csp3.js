console.log('Hello World!')

let nombre = 'Horacio'

console.log('Hello ' + nombre)

let a = 5, b = 10

console.log('La suma de ' + a + ' + ' + b + ' = ' + a+b)
console.log('La suma de ' + a + ' + ' + b + ' = ' + (a+b))

const factorA = process.argv[2]

for (let factorB = 1; factorB <= 10; factorB++) {
    console.log(factorA + ' x ' + factorB + ' = ' + (factorA*factorB))
}
