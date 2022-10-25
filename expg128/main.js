// classes

class carro {
    constructor(nome, ano){
        this.nome = nome;
        this.ano = ano;
    }
}

//intanciando objetos a classe


let meuCarro1 = new carro('ford', 2014);
let meuCarro2 = new carro('audi', 2019);


//printing values
console.log(meuCarro1.nome);
console.log(meuCarro1.ano);


console.log(meuCarro2.nome);
console.log(meuCarro2.ano);


//declare new class modes

class NovoCarro {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }

idadeCarro(ano) {
    return ano - this.ano;

}
}

//actual year searching

let dataHoje = new Date();
let ano = dataHoje.getFullYear();


//console.log(dataHoje);

//intanciando o objeto a classe

let meuNovoCarro = new NovoCarro('ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));


// ex 2 class

class ClassePessoa {
    constructor(firstName, lastname, dob) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getfullName() {
        return `${this.firstName} ${this.lastname}`;
    }
}


//instantiate object

const pessoa1 = new ClassePessoa('John', 'Doe', '1980-04-03');
const pessoa2 =  new ClassePessoa('Marry', 'Smith', '1970-06-13');

console.log(pessoa1);  

console.log(pessoa2.dob.getFullYear());
console.log(pessoa2.getBirthYear());

console.log(pessoa1.getfullName());



//lexical this em uma função

//constructor de função --- lexical this


function PessoaFunc(firstName, lastname, dob) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function ()
    {return this.dob.getFullYear();
};
this.getfullName = function(){
return `${this.firstName} ${this.lastname}`
}

//intanciando objetos



}

const pessoa3 = new PessoaFunc('john', 'doe', '1980-04-02');
const pessoa4 = new PessoaFunc('marry', 'smith','1970-06-13');

console.log(pessoa3);
console.log(pessoa4.dob.getFullYear());


//adding prototypes

PessoaFunc.prototype.getBirthDayMonth = function (){
    let dados = [this.dob.getDate(), this.dob.getMonth() + 1];
    return dados;
};

PessoaFunc.prototype.getFirstname = function () {
    return `${this.firstName}`;

};

console.log(pessoa3.getBirthDayMonth());
console.log(pessoa4.getFirstname());