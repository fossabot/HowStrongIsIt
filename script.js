const passwordInput = document.getElementById('passwordInput');
const passwordStrength = document.getElementById('passwordStrength');

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  displayPasswordStrength(strength);
});

function checkPasswordStrength(password) {
  if (password.length >= 16) {
    return 'very strong';
  } else if (password.length >= 12) {
    return 'strong';
  } else if (password.length >= 8) {
    return 'moderate';
  } else if (password.length >= 6) {
    return 'weak';
  } else {
    return 'very weak';
  }
}

function displayPasswordStrength(strength) {
  let color = '';
  switch (strength) {
    case 'very weak':
      color = 'red';
      break;
    case 'weak':
      color = 'orange';
      break;
    case 'moderate':
      color = 'blue';
      break;
    case 'strong':
      color = 'green';
      break;
    case 'very strong':
      color = 'darkgreen';
      break;
    default:
      color = 'black';
      break;
  }

  passwordStrength.textContent = `Password Strength: ${strength}`;
  passwordStrength.style.color = color;
}