//método for each



const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao) ;
function minhaFuncao(item, index) {
    console.log(`índice: ${index}`);
    console.log(`Elemento: ${item}`);
}


//metodo for each arrow function

const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`Indice: ${index}`);
    console.log(`Elemento: ${item}`);
});


//foreach() c/ array de objetos

const tarefas = [
    {
        id: 1,
        texto: 'levar o lixo pra fora',
        isCompleted: true,
    },
    {
        id: 2,
        texto: 'encontrar com o chefe',
        isCompleted: true,
    },
    {
        id: 3,
        texto: 'consulta no dentista',
        isCompleted: false,
    },
];

tarefas.forEach((teste) => console.log(teste.texto));

//metodo map()

const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.log('Números:');
console.log(numeros);
console.log('Novo array');
console.log(newArray);

//outro exemplo do map

const mapText = tarefas.map((valor) => {
    return valor.texto;
});

//imprime o novo array
console.log(mapText);



//metodo filter

const idades = [32, 33, 16, 40];

let filtroIdade = idades.filter((idade) => {
    return idade >= 18;
});

console.log(filtroIdade);

//outro ex de filter

const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
});
console.log(filtoCompletas);

//metodo find


const meuArray = [
    { nome: 'apples', quantidade: 0 },
    { nome: 'bananas', quantidade: 0 },
    { nome: 'cerejas', quantidade: 5 },
];

console.log(
    meuArray.find((fruta) => {
        return fruta.nome === 'cerejas';
    })
);