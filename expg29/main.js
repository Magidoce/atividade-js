//let, const
console.clear();
let idade = 30;
const nome = 'nico';
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);

//string, numbers, boolean, null, undefined
console.clear();
const nome_pessoa = 'john';
const idade1 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;


//typeoff const
console.log(typeof nome_pessoa);
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


//concatear strings
console.clear();
const pessoa = 'irmão do jorel';
const idade2 = 30;
console.log('meu nome é ' + pessoa +' e eu tenho ' + idade2 + ' anos! ');

//template string
const hello = `meu nome é ${pessoa} e eu tenho ${idade2} anos!`;
console.log(hello);


//operadores de comparação e lógico
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log(teste1 > teste2);  //operador de comparação
console.log(teste2 > teste1);  // =================
console.log(teste1 && teste2);  //operador lógico
console.log(valor1 && valor2);  //================





