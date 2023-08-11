/* VARIAVEIS    */
// var | let | const

// var 
// a var tem escopo global

var altura = 5;
var comprimento = 10;
var area = 10; 
area = altura * comprimento;
var area = 20;              // mesmo com a variavel nao iniciada o js aceita
// console.log(area)
var area;                   // mesmo se a variavel for iniciada depois da atribuição ela funciona
//console.log(area)
// obs: A VAR por ter esse escopo e essa liberdade de poder ser iniciada quantas veses possiveis e
// ate com o mesmo nome pode trazer problemas, então e preferivel e recomendado usar a variavel LET.



// LET
// a let tem escopo de bloco
let numero;
numero = 10;
//console.log(numero)
// let numero; // o JS nao aceita declarar 2 ou mais variaveis de mesmo nome com a let

let escopo1 = "escopo 1";
//console.log(escopo2)  // se utilizar a variavel antes de ser iniciada gera um erro

{
    console.log(escopo1) // a variavel let que ta no escopo global funciona dentro do bloco O INVERSO NAO FUNCIONA
    let escopo2 = "escopo 2";
    console.log(escopo2);
    //let escopo1 = "escopo 1 dentro do bloco";

    {
        let escopo3 = "escopo 3";
        console.log(escopo3);
        let escopo2 = "escopo 2 dentro do 2° bloco";
        console.log(escopo2);
    }
    let escopo3 = "escopo 3 fora do bloco";
    console.log(escopo3);
}

//console.log(escopo2) // se utilizar a let declarada em um escopo de bloco no escopo global gera erro
let escopo2 = "escopo 2 fora do bloco";
//console.log(escopo2); // variaveis let pode ter mesmo nome somente de estiver em blocos diferentes

console.log("\n***********************\nConst:\n")
// CONST

//const nome; // a const nao aceita inicializar sem ser atribuida algum valor, tem que atribuir valor na hora da declaração
const nome = "Klebson";
console.log(nome)

const texto = "Ola";
//texto = "Ei";
//console.log(texto) // gera erro pois constantes nao podem ser reatribuidas (O VALOR NAO PODE SER ALTERADO), MAS COM LET E E POSSIVEL

let texto2 = "bom dia";
texto2 = "Boa tarde";
console.log(texto2);



