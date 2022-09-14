function login() {
  const senha = '123456';
  const coisa2 = document.querySelector('.password').value;
  const email = 'tryber@teste.com';
  const coisa = document.querySelector('.email').value;
  if (email === coisa && senha === coisa2) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
// login();
console.log('oi');
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
