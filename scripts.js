// Pegando todos os números 
let um = document.querySelector('#um');
let dois = document.querySelector('#dois');
let tres = document.querySelector('#tres');
let quatro = document.querySelector('#quatro');
let cinco = document.querySelector('#cinco');
let seis = document.querySelector('#seis');
let sete = document.querySelector('#sete');
let oito = document.querySelector('#oito');
let nove = document.querySelector('#nove');
let zero = document.querySelector('#zero');

// Pegando os operadores 
let somar = document.querySelector('#somar');
let subtrair = document.querySelector('#subtrair');
let dividir = document.querySelector('#dividir');
let multiplicar = document.querySelector('#multiplicar');

// Pegando o display, igual e decimal
let display = document.querySelector('#display');
let igual = document.querySelector('#igual');
let decimal = document.querySelector('#decimal');
let limpar = document.querySelector("#limpar");


// adicionando eventos nos botões
um.addEventListener("click", () => {
    display.value += "1";
});

dois.addEventListener("click", () => {
    display.value += "2";
});

tres.addEventListener("click", () => {
    display.value += "3";
});

quatro.addEventListener("click", () => {
    display.value += "4";
});

cinco.addEventListener("click", () => {
    display.value += "5";
});

seis.addEventListener("click", () => {
    display.value += "6";
});

sete.addEventListener("click", () => {
    display.value += "7";
});

oito.addEventListener("click", () => {
    display.value += "8";
});

nove.addEventListener("click", () => {
    display.value += "9";
});

zero.addEventListener("click", () => {
    display.value += "0";
});

somar.addEventListener('click', () => {
    display.value += "+";
});

subtrair.addEventListener("click", () => {
    display.value += "-";
});

multiplicar.addEventListener("click", () => {
    display.value += "*";
});

dividir.addEventListener("click", () => display.value += "/");

decimal.addEventListener("click", () => display.value += ".");

limpar.addEventListener("click", () => {
    display.value = "";
});

// Resultado
igual.addEventListener("click", () => {
    display.value = eval(display.value);
});