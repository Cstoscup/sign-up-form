function passwordMatchCheck(event) {
  if (initialPassword.value === confirmedPassword.value) {
    cpLabel.setAttribute('hidden', 'hidden');
    confirmedPassword.classList.remove('error');
    initialPassword.classList.remove('error');
  } else {
    cpLabel.removeAttribute('hidden');
    confirmedPassword.classList.add('error');
    initialPassword.classList.add('error');
  }
}

function passwordCheck(event) {
  if (!event.target.checkValidity()) {
    if (hasAccount === false) {
      ipLabel.removeAttribute('hidden');
    }
  } else {
    ipLabel.setAttribute('hidden', 'hidden');
  }
}

function openLoginScreen(event) {
  event.preventDefault();
  ipLabel.setAttribute('hidden', 'hidden');
  formTopText.innerHTML = 'Welcome Back! Log in below...';
  button.innerHTML = 'Log in';
  firstName.removeAttribute('required');
  lastName.removeAttribute('required');
  firstName.setAttribute('hidden', 'hidden');
  lastName.setAttribute('hidden', 'hidden');
  firstNameLabel.setAttribute('hidden', 'hidden');
  lastNameLabel.setAttribute('hidden', 'hidden');
  phoneNumber.removeAttribute('required');
  passwordConfirmed.removeAttribute('required');
  phoneNumber.setAttribute('hidden', 'hidden');
  passwordConfirmed.setAttribute('hidden', 'hidden');
  phoneNumberLabel.setAttribute('hidden', 'hidden');
  passwordConfirmedLabel.setAttribute('hidden', 'hidden');

  hasAccount = true;
}

var initialPassword = document.getElementById('password-initial');
initialPassword.addEventListener('input', passwordCheck);

var confirmedPassword = document.getElementById('password-confirmed');
confirmedPassword.addEventListener('input', passwordMatchCheck);

var cpLabel = document.getElementById('pc-label');
var ipLabel = document.getElementById('pi-label');

var loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', openLoginScreen);

var formTopText = document.getElementById('form-top-text');

var button = document.getElementById('button');

var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var phoneNumber = document.getElementById('phone-number');
var passwordConfirmed = document.getElementById('password-confirmed');
var firstNameLabel = document.getElementById('first-name-label');
var lastNameLabel = document.getElementById('last-name-label');
var phoneNumberLabel = document.getElementById('phone-number-label');
var passwordConfirmedLabel = document.getElementById('password-confirmed-label');

var hasAccount = false;