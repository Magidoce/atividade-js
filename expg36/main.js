//concatenar string
let valor01 = 100;
const valor02 = 5;
console.log(' A multiplicação de ' + valor01 + ' por ' + valor02 + ' é ' + valor01 * valor02);
console.log(` A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);



//métodos de string
const string01 = 'Instituto da Oportunidade Social';




//acessando o primeiro caractere
console.log(string01.charAt(0));
console.log(string01[0]);




//acessando o décimo primeiro caractere
console.log(string01.charAt(10));
console.log(string01[10]);



//tamanho de strings
let texto = 'asdasdasdasdasdasdsadsadasdadssadsadsadsadsdasda';
console.log(texto.length);



//ex2 text lenght
const texto2 = 'Também 123 [] é uma strings 231 -1\n';
console.log(texto2.length);






//Maiusculo e Minúsculo
const s = 'Hello World';

console.log(s.toUpperCase());
console.log(s.toLowerCase());





//substring e split
const str = 'mozilla';

console.log(str.substring(1, 3)); //saída esperada "oz"
console.log(str.substring(2)); //saída esperada "zilla"





//ex2 substring e split
const str1 = 'A raposa é um animal esperto';

const palavras = str1.split(' ')    //saída esperada "um"
console.log(palavras[3]);

const chars = str1.split('');    //saída esperada "a"
console.log(chars[7]);

const strcopy = str1.split();
console.log(strcopy);    //saída esperada array "a raposa é um animal esperto"





//substituir string
let mensagem = 'Venha para a Microsoft!';
console.log(mensagem);
let novaMensagem = mensagem.replace('Microsoft', 'IOS');
console.log(novaMensagem);


//remover espaços
let text = '          Olá alunos do IOS!                ';
console.log(text.trim());


//Métodos de busca em strings
console.clear();
let frase = 'Sou um Aluno do IOS e o IOS é muito bom!';
console.log(frase.indexOf('IOS'));//return 16
console.log(frase.lastIndexOf('IOS'));//returns 24

console.log(frase.search('IOS'));//returns16

console.log(frase.startsWith('S'));//verdadeiro retorna true

console.log(frase.startsWith('sou'));//verdadeiro retorna true
console.log(frase.startsWith('a'));//falso - retorna false

console.log(frase.endsWith('!')); //verdadeiro - return true
console.log(frase.endsWith('bom!'));//verdadeiro- return true
console.log(frase.endsWith('x'));//falso - retorna false





