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
btn.addEventListener('click', login);

const submit = 'submit-btn';

document.getElementById(submit).disabled = true;

function habilitarBtn() {
  if (document.getElementById('agreement').checked) {
    document.getElementById(submit).disabled = false;
  } else {
    document.getElementById(submit).disabled = true;
  }
}
document.getElementById('agreement').addEventListener('click', habilitarBtn);

const contador = document.getElementById('counter');

function contaLetra() {
  const tamanhoTexto = document.getElementById('textarea').value.length;
  contador.innerHTML = 500 - tamanhoTexto;
}

const textito = document.getElementById('textarea');

textito.addEventListener('keyup', contaLetra);

function checaCaixas() {
  const materias = document.querySelectorAll('.subject');
  let checadas = 'Matérias:';
  materias.forEach((checkbox) => {
    if (checkbox.checked) {
      checadas += (', '.concat(checkbox.value));
    }
  });
  checadas = checadas.slice(0, 9) + checadas.slice(10);
  return checadas;
}

function checaBolas() {
  const aval = document.querySelectorAll('.redondo');
  let bolas = '';
  aval.forEach((bola) => {
    if (bola.checked) {
      bolas = bola.value;
    }
  });
  return bolas;
}

function checaFamily() {
  const family = document.querySelectorAll('.vinDiesel');
  let individuos = '';
  family.forEach((individuO) => {
    if (individuO.checked) {
      individuos = individuO.value;
    }
  });
  return individuos;
}

function pegaDados() {
  const nome = document.getElementById('input-name').value;
  const sobreNome = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const materias = checaCaixas();
  const family = checaFamily();
  const avaliacao = checaBolas();
  const observ = document.getElementById('textarea').value;
  return {
    nome,
    sobreNome,
    email,
    house,
    family,
    materias,
    avaliacao,
    observ,
  };
}

function submitDados(event) {
  event.preventDefault();
  document.getElementById('evaluation-form').style.display = 'none';
  const dados = pegaDados();
  const nome = dados.nome.concat(' '.concat(dados.sobreNome));
  document.getElementById('nomeForm').innerHTML = 'Nome: '.concat(nome);
  document.getElementById('emailForm').innerHTML = 'Email: '.concat(dados.email);
  document.getElementById('casaForm').innerHTML = 'Casa: '.concat(dados.house);
  document.getElementById('familyForm').innerHTML = 'Família: '.concat(dados.family);
  document.getElementById('materiasForm').innerHTML = dados.materias;
  document.getElementById('avalForm').innerHTML = 'Avaliação: '.concat(dados.avaliacao);
  document.getElementById('obsForm').innerHTML = 'Observações: '.concat(dados.observ);
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', submitDados);
