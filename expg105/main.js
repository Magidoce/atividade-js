//funções

function addNums(num1 = 1, num2 = 2) {
    return num1 + num2;
}


let x = addNums(4, 5); //chamada da função addNums
console.log(x);

let z = myFunc(4, 5); //chamada da função myfunc
console.log(z);

function myFunc(num1, num2) {
    return num1 * num2;
}




//arrow functions
const hello = () => { return 'olá arrow function!' };

console.log(hello); //retorna o objeto função
console.log(hello()); //executa a função e imprime a string return





const addNums2 = (num1 = 1, num2 = 1) => {return num1 + num2 ;};

let soma = addNums2(5, 10);
console.log(soma);


