// tipos de dados

// number

// int
// obs: o JavaScrip reconhece o tipo de forma automatica
const primeiroNumero = 1;
const segundoNumero = 3;

const operacao = primeiroNumero + segundoNumero;
//console.log(novaOperacao);
const novaOperacao = primeiroNumero * segundoNumero;
//console.log(novaOperacao);

// Ponto flutuante
const num1 = 0.50;
const num2 = .50;
const operacao2 = num1 + num2;
//console.log(operacao2);

// NaN -> not a number -> Nâo e numero
// o NaN geralmente aparece ao fazer operações de texto com numeros
// Atençaõ: Operações de Adição não da NaN e sim Junta dos Valores(concatena)

const valor1 = "valor1";
const valor2 = 20;
const op = valor1 * valor2;
//console.log(op);


// Tipos de dados String
// texto(STRING)

// ATENÇÃO: o JS diferencia maiuscula de minuscula

const texto = "Olá Mundo!";
const nome = "Janaina";
const nome2 = 'Jurema';
//console.log(texto);
//console.log(nome);
//console.log(nome2);

const citacao = "O Klebson disse 'oi' para voce.";
const citacao2 = 'O Klebson disse "oi" para voce.';
//console.log(citacao2);

// concatenação

const frase = "meu nome é";
const meuNome = " Klebson";
//console.log(frase + meuNome);

// tamplete string, tamplete literal
const meuNome2 = " Klebson";
const minhaIdade = 27;

//console.log(`O meu nome e ${meuNome2} e tenho ${minhaIdade} anos de idade`);



// boolean
// TRUE ou FALSE

const testeNumero = 2;
const testeNumero2 = 3;
console.log(testeNumero === testeNumero2) // FALSE
console.log(testeNumero !== testeNumero2) // TRUE


