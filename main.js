const form = document.getElementById('form-maior');
let formEValido = false;

function validaForm(numeroA, numeroB) {
    if(numeroA<numeroB){
        return true;
    }else {
        return false;
    }
}
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB');
    const menssagemSucesso = `Tudo certo, o Número: <b>${numeroA.value}</b> é menor que: <b> ${numeroB.value}</b>`

    formEValido = validaForm(numeroA.value, numeroB.value);
    if(formEValido){
        const containerMenssagemSucesso = document.querySelector('.success-message');
        containerMenssagemSucesso.innerHTML = menssagemSucesso;
        containerMenssagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.error-message').style.display = 'none';
    }else{
        numeroA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        
        const containerMenssagemSucesso = document.querySelector('.success-message');
        containerMenssagemSucesso.style.display = 'none';
    }
});