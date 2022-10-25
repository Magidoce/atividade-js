// metod getElementById

let titulo = document.getElementById('titulo');


//alterando conteudo do element

titulo.innerHTML = 'Olá meus caros alunos!';

//configurando o style css do element

titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';


//metod getElementsByClassName

let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';



for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'pink';
}


//Método getElementsBytagName

let li = document.getElementsByTagName('li');
console.log(li);

for (let i = 0; i < li.length; i++) {
    if (i % 2) li[i].style.backgroundColor = 'pink';
    else li[i].style.backgroundColor = 'lightgreen'
}



//get element by nAME

let nome = document.getElementsByName('fitem');
console.log(nome);
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = 'lightblue';

//removendo elemento dom

let item2 = document.getElementById('item2');
item2.remove();


//retornando o element

let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);


//alterando estilo da lista

let ul = document.getElementById('items');
ul.style.listStyle = 'none';

//marcadores numericos

ul.style.listStyle = 'decimal inside';