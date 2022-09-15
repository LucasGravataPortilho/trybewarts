function login(event) {
  event.preventDefault();
  const senha = '123456';
  const password = document.querySelector('[name="password"]');
  const email = 'tryber@teste.com';
  const emailZao = document.querySelector('[name="email"]');
  if (email === emailZao.value && senha === password.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const btn = document.getElementById('enter');
console.log(btn);
btn.addEventListener('click', login);

const submit = 'submit-btn';

document.getElementById(submit).disabled = true;

function enviar() {
  if (document.getElementById('agreement').checked) {
    document.getElementById(submit).disabled = false;
  } else {
    document.getElementById(submit).disabled = true;
  }
}
document.getElementById('agreement').addEventListener('click', enviar);

const contador = document.getElementById('counter');

function contaLetra() {
  const tamanhoTexto = document.getElementById('textinho').value.length;
  contador.innerHTML = 500 - tamanhoTexto;
}

const textito = document.getElementById('textinho');

textito.addEventListener('keydown', contaLetra);
