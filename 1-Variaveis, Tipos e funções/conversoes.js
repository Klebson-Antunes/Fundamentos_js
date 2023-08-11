// Conversoes

// implicita
console.log("implicita\n")

let num1 = 10;    // number
let num2 = "10";  // string

console.log(num1 == num2) // => true a comparação(==) verifica somente o valor
console.log(num1 === num2) // => false a comparação(===) verifica valor e tipo

console.log(num1 + num2) //=> 1010  como existe uma string ao usar o operardor + ele concatena(junta)
console.log(num1 * num2) // => 100 ja com outro operadores mesmo sendo string ele realiza a operação, mas somente se não ouver letras
let num3 = "10ab"
console.log(num1 * num3) //=> NaN porque nao e possivel fazer operaçoes matematica com string que contem letras

// Explicita
console.log("\n************\nExplicita\n")

// Number()
// String()

let numero1 = 12;
let soma = numero1 + Number("10");
console.log(soma) // 22

// converta numeo em string para concatenar, valor esperado(112)
let numero3 = 1;
let numero4 = 12;
let numeroConcatenado = String(numero3) + String(numero4);
console.log(numeroConcatenado);
