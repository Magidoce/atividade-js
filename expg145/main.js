//js e dom 
//doc object

console.log(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

//alterar título

document.title = 123;

//create h1

let heading = document.createElement('h1');
heading.innerHTML = 'olá alunos!';
document.body.appendChild(heading);
