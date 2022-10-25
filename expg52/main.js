const a = 10;
if (a == 10){
    console.log('a é 10');
}

const b = 10;
if (b == '10'){
    console.log('b é 10');
}


//triple = verify type

const c = 10;

if (c === 10) console.log ('c é 10');

const d = '10';
if (d === 10) {
    console.log('d é 10');
}

console.log('Estou fora do if que compara string');


//estrutura condicional composta

const e = '10';
if (e === 10) console.log('e é o numeral 10');

else{
    console.log(`Resultado da condição: ${e === 10}`);
    console.log('e não é o numeral 10');
}


//multiple conditions

const f = 4;
const g = 11;


if (f > 5 || g > 10) {
    console.log(`condição é ${f > 5 || g > 10}`);
    console.log('f é maior do que 5 ou g é maior do que 10');
}

else console.log('f não é maior do que 5 e g é maior do que 10');

if (f > 5 && g > 10) console.log('f é maior do que 5 e g é maior do que 10');

else{
    console.log(`Condição é ${f > 5 && g > 10}`);
    console.log('f não é maior do que 5 ou g não é maior do que 10');
}

//desvio encadeado

const num = 10;

if (num % 2 == 0 && !isNaN(num)) console.log('numero par!');
else if (num % 2 != 0 && !isNaN(num)) console.log('Número ímpar');
else console.log('não é um número!');


//operador ternário - ex 1

let resultado = 3 > 4 ? "sim" : "não";
console.log(resultado)


//ex 2

let result = Math.PI < 4 ? console.log('sim') : console.log(não);


//switch


const h = 5;
const cor = h > 10 ? 'vermelha' : 'azul';

switch (cor) {
    case 'vermelha':
        console.log('A cor é vermelha');
        break

    case 'azul':
        console.log('A cor é azul');

        break

    default:
        console.log('A cor não é vermelha ou azul');
        break

}