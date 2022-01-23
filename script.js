// Requisito 3 - Validação de login
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => (emailInput.value === 'tryber@teste.com'
&& passwordInput.value === '123456' ? alert('Olá, Tryber!') : alert('Email ou senha inválidos.')));

// Requisito 18 - Consentimento obrigatório
const agreementBox = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

agreementBox.addEventListener('click', () => {
  if (agreementBox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// Requisito 20 - Contador de caracteres
const textArea = document.getElementById('textarea');
const textAreaCounter = document.getElementById('counter');

textArea.addEventListener('keyup', () => {
  const length = textArea.textLength;
  const maxLength = 500;
  const counter = maxLength - length;

  textAreaCounter.innerText = counter;
});

// Requisito 21 - Imprimir formulário
const forms = document.getElementById('evaluation-form');
const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');

function makeParagraph(key, value) {
  const p = document.createElement('p');
  p.innerText = `${key}: ${value}`;
  forms.appendChild(p);
}
/** Source: https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio */
function printSummary() {
  const fullName = `${firstName.value} ${lastName.value}`;
  const family = document.querySelector('input[name=family]:checked');
  const rate = document.querySelector('input[name=rate]:checked');
  const subjects = document.querySelectorAll('inpit[class=subject]');
  const selectedSubjects = [];
  
  for (let i = 0; i < subjects.length; i += 1) {
      selectedSubjects.push(subjects[i].value);
  }
  
  forms.innerHTML = '';
  makeParagraph('Nome', fullName);
  makeParagraph('Email', email.value);
  makeParagraph('Casa', house.value);
  makeParagraph('Família', family.value);
  makeParagraph('Matérias', `${selectedSubjects.join(', ')}`);
  makeParagraph('Avaliação', rate.value);
  makeParagraph('Observações', textArea.value);
}

submitButton.addEventListener('click', (event) => {
  const submit = event;
  submit.preventDefault();
  printSummary();
});
