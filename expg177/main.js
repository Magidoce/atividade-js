// metodo queryselector

const btn = document.querySelector('.btn');
btn.style.background = 'red';


//metodo addeventlistener

myForm.addEventListener('submit', onSubmit);

//função onsubmir

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameimputvalue)

    if(nameInput.value === '' || emailImput.value === ''){
        //alert('por favor preencha os dados)

        msg.classList.add('error');
        msg.innerHTML = 'por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {

        //console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailImput.value} : ${horario.value}`
            )
        );
        userList.appendChild(li);
        //limpa o formulario
        nameInput.value = '';
        emailImput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //coloca o foco no elemento
    }
}

//validando email

emailImput.addEventListener('change', (e) => {let padrao = new RegExp(/.*@.*\..*/i);
if (!padrao.test(emailImput.value)) {
    //aler por favor insira um email valido
msg_email.classList.add('error');
msg_email.innerHTML = 'Por favor, insira um e-mail válido.';
setTimeout(() => msg.remove(), 3000);
}
});