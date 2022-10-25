//objetos

let pessoa = {
    firstName: 'Irmão do',
    lastName:'Jorel',
    idade: 10,
    corDosOlhos: 'Preto',
    hobbies:['música', 'filmes', 'esportes'],
    endereço:{
        rua:'Rua dos bobos',
        numero:0,
        cidade:'São Paulo',
        estado:'SP',
    },
};

console.log(pessoa);
console.log(pessoa.firstName);
console.log(pessoa.lastName, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereço.cidade);


//atribuição via desestruturação

const {
    firstName,
    lastName,
    endereço: {cidade},
} = pessoa;

console.log(`${firstName} ${lastName} é de ${cidade}`);

//atribuição via desestruturação com arrays

const array = [1, 2, 3, 4, 5];
let [valor01, valor02, ...resto] = array;
console.log(valor01);
console.log(valor02);
console.log(resto);


let [valorA, valorB, valorC, ...restante] = array;
console.log(valorA);
console.log(valorB);
console.log(valorC);
console.log(restante);

//array de objetos

const tarefas = [
    {id: 1,
    texto: 'levar o lixo pra fora',
     isCompleted: true,},
    {id: 2,
    texto: 'encontrar com o chefe',
     isCompleted: true,},
    {id: 3,
    texto: 'consulta no dentista',
     isCompleted: false,},
];

console.log(tarefas);
console.log(tarefas[1].texto);
console.log(tarefas[2].id, tarefas[2].texto, tarefas[2].isCompleted);


//transformar array em json

console.log(JSON.stringify(tarefas));


// JSON
const tarefa_JSON =
'[{"id":1,"texto":"Levar o lixo para fora","isCompleted":true},{"id":2,"texto":"Encontrar com o chefe","isCompleted":true},{"id":3,"texto":"Consulta no dentista","isCompleted":false}]';
const objeto = JSON.parse(tarefa_JSON);
console.log(objeto);
