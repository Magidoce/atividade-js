//arrays unidimensionais

//podemos criar array assim

const num1 = new Array(30, -1, 5, 3, 121);

//ou podemos fazer

const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1);
console.log(num2);

//acessando elementos diversos dos arrays
console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);

console.log(`terceiro elemento de num1: ${num1[2]}`);
console.log(`quinto elemento de num2: ${num2[5]}`);

//arrays bidimensionais
const matrix = [
    ['Banana', 'Maçã', 'Pêra'],
    ['Laranja', true, 1],
    [null, 'Uva', -350],
];

//Acessando elementos diversos dos arrays
console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa o segundo elemento: ${matrix[0][1]}`);

//alterando um valor do array
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];

console.log(`Antes: ${moedas}`);
moedas[2] = 'yen';
console.log(`Depois: ${moedas}`);

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log('Antes:');
console.log(matrix1)


//alterando um valor do array
matrix1[0][2] = -10;
console.log('depois');
console.log(matrix1);


//metodos em array = To String
let numArray = [1, 2, 3, 4];
console.log(typeof numArray);

let numArray2 = numArray.toString();
console.log(typeof numArray2);

//join

let teste1 = [0, 1, 2, 3, 4, 5];
let teste2 = teste1.join(' *** ');
console.log(teste2);
console.log(typeof teste2);


//tamanho de arrays

let array = [0, 1, 2, 3, 4];
console.log(array.length);


//remover e inserir elementos
//pop()
const frutas1 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let x = frutas1.pop(); //x = "Manga"

console.log(frutas1);
console.log(x);

//push

const frutas2 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
let y = frutas2.push('kiwi'); //y = 5

console.log(frutas2);
console.log(y);

//shift()

const frutas3 = ['Banana', 'Laraja'];

let z = frutas3.shift(); //z = 'Banana'
console.log(frutas3);
console.log(z);

//unshift

const frutas4 = ['Banana', 'Laraja'];
let w =frutas4.unshift('kiwi'); //w=3

console.log(frutas4);
    console.log(w);




//delete

const frutas5 = ['Banana', 'Laranja', 'Maçã', 'Manga'];
delete frutas5[2];

console.log(frutas5)