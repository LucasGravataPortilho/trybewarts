function login() {
  console.log('batata');
  const email = 'tryber@teste.com';
  const coisa = document.querySelector('.email').value;
  if (email === coisa) {
    const senha = '123456';
    const coisa2 = document.querySelector('.password').value;
    if (senha === coisa2) {
      alert('Olá, Tryber!');
    }
  } else {
    alert('Email ou senha inválidos.');
  }
}
login();
