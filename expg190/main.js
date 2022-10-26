let form = document.getElementById('addForm');

let itemList = document.getElementById('items');

let filter = document.getElementById('filter');


//form event submit

form.addEventListener('submit', addItem);


//delete event

itemList.addEventListener('click', removeItem);


//filter event

filter.addEventListener('keyup', buscarItems);


//add item

function addItem(e) {
    e.preventDefault();



//pegavalor do imput

let newItem = document.getElementById('item').value;


//create new element li

let li = document.createElement('li');

//class add

li.className = 'list-group-item';

//add text to new element in new item

li.appendChild(document.createTextNode(newItem));

//create delete button on item

let deleteBtn = document.createElement('button');


//add class to delete button

deleteBtn.className = 'btn btn-danger btn- float-end delete';


//increase text to new element

deleteBtn.appendChild(document.createTextNode('x'));


//add btn to li

li.appendChild(deleteBtn);

itemList.appendChild(li); //add item to new list

form.reset(); //clear no formulario

}


//function remove item


function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}


//function item searcher


function buscarItems(e) {
    //conversor de texto para caixa baixa
    let text = e.target.value.toLowerCase();

    //buscar todos os itens
    let items = itemList.getElementsByTagName('li');

    //converte os itens em array

Array.from(items).forEach(function (item) {

    //busca o primeiro item na lista

    let itemName = item.firstChild.textContent;

    //busca item na lista que começa com o mesmo texto digitado

    if (itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block'; //exibe o item
    } else {
        item.style.display = 'none'; //oculta o item
    }
});
}