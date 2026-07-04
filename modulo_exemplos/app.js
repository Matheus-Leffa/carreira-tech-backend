/*
var pessoa = require("./commons/Pessoa");
var soma = require("./commons/Soma");
var imposto = require("./commons/calcularImposto");

console.log("Valor do produto com imposto: " + imposto.adicionar(10));
console.log("Valor do imposto: " + imposto.valor(10));
console.log("Taxa do imposto: " + imposto.taxa);
*/

/*
matheus = pessoa();

console.log(JSON.stringify(matheus));
console.log(soma(5,4));
*/

var calculadora = require("./commons/Calculadora");

console.log(calculadora.soma(5,4));
console.log(calculadora.subtracao(5,4));
console.log(calculadora.multiplicacao(5,4));

try {
    console.log(calculadora.divisao(5,4));
    console.log(calculadora.divisao(5,0));
} catch (error) {
    console.log(error.message);
}


