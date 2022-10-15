function passwordChange(event) {
  console.log(initialPassword.value);
}

function passwordMatchCheck(event) {
  if (initialPassword.value === confirmedPassword.value) {
    console.log('YAY');
  } else {
    console.log('passwords do not match')
    console.log(confirmedPassword)
    var cpLabel = document.getElementById('pc-label')
    cpLabel.removeAttribute('hidden');
    confirmedPassword.classList.add('error');
    initialPassword.classList.add('error');
  }
}

var initialPassword = document.getElementById('password-initial');
initialPassword.addEventListener('change', passwordChange);

var confirmedPassword = document.getElementById('password-confirmed');
confirmedPassword.addEventListener('change', passwordMatchCheck);