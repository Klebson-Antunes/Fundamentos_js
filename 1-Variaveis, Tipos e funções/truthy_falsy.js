// boolean

// truthy ou falsy

// 0 => false
// 1 => true

const usuarioLogado = true;
const contaPaga = false;

console.log(0 == false) // true
console.log("" == false) // true
console.log(1 == true) // true


// null e undefined

let minhaVar;            // valor indefinido
let numero = null;      // valor nulo

console.log(minhaVar) // undefined, nao foi atribuido valor a ele
console.log(numero)// null, variavel foi atribuido o valor de null

console.log("\n********************\nTypes:\n")

let meuNumero = 3;
let texto = "Klebson";
let valorNull = null;
let valorIndefinido;

console.log(typeof meuNumero) //number
console.log(typeof texto)     // string
console.log(typeof valorNull) // object
console.log(typeof valorIndefinido) // undefined

