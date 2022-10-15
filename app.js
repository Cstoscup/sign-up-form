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
    ipLabel.removeAttribute('hidden');
  } else {
    ipLabel.setAttribute('hidden', 'hidden');
  }
}

var initialPassword = document.getElementById('password-initial');
initialPassword.addEventListener('input', passwordCheck);

var confirmedPassword = document.getElementById('password-confirmed');
confirmedPassword.addEventListener('input', passwordMatchCheck);

var cpLabel = document.getElementById('pc-label');
var ipLabel = document.getElementById('pi-label');