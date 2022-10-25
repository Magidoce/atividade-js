//while

let contador = 1;

while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}

//while c/ decremento

let cont = 10;

while (cont >= 0) {
    console.log(`valor = ${cont}`);
    cont--;
}

// do-while


let i = 10;
     text = '';
do {
    text += `o número é ${i}\n` ;
    i++;
} while(i < 10);
console.log(text);


//for

for(let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

//for-decremento

for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`);


//laços de arrays
const frutas =['apples', 'oranges' , 'pears' , 10, true];

for(let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

//array de objetos e laços

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true, 
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];

//for overloop

for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
}