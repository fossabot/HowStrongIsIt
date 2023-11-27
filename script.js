const passwordInput = document.getElementById('passwordInput');
const passwordStrength = document.getElementById('passwordStrength');
const generatePasswordBtn = document.getElementById('generatePasswordBtn');


passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;
  const strength = checkPasswordStrength(password);
  displayPasswordStrength(strength);
});

function checkPasswordStrength(password) {
  const patterns = {
    repeatingChars: /(.)\1{2,}/, // Pattern to check for repeating characters
    sequentialNumbers: /123|234|345|456|567|678|789|987|876|765|654|543|432|321/g, 
    sequentialLetters: /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|zyx|yxw|xwv|wvu|vut|uts|tsr|srq|rqp|qpo|pon|onm|nml|mlk|lkj|kji|jih|ihg|hgf|gfe|fed|edc|dcb|cba/gi
  };

  if (password.length >= 20 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
    return 'unbreakable';
  } else if (password.length >= 16) {
    if (patterns.repeatingChars.test(password)) {
      return "don't use repeating characters!";
    } else if (patterns.sequentialNumbers.test(password) || patterns.sequentialLetters.test(password)) {
      return "don't use sequences like this!";
    } else {
      return 'very strong';
    }
  } else if (password.length >= 12) {
    if (patterns.repeatingChars.test(password)) {
      return "don't use repeating characters!";
    } else if (patterns.sequentialNumbers.test(password) || patterns.sequentialLetters.test(password)) {
      return "don't use sequences like this!";
    } else {
      return 'strong';
    }
  } else if (password.length >= 8) {
    if (patterns.repeatingChars.test(password)) {
      return "Don't use repeating characters!";
    } else if (patterns.sequentialNumbers.test(password) || patterns.sequentialLetters.test(password)) {
      return "don't use sequences like this!";
    } else {
      return 'moderate';
    }
  } else if (password.length >= 6) {
    if (patterns.repeatingChars.test(password)) {
      return "don't use repeating characters!";
    } else if (patterns.sequentialNumbers.test(password) || patterns.sequentialLetters.test(password)) {
      return "don't use sequences like this!";
    } else {
      return 'weak';
    }
  } else {
    return 'very weak';
  }
}

function displayPasswordStrength(strength) {
  let color = '';
  switch (strength) {
    case "don't use repeating characters!":
    case "don't use sequences like this!":
      color = 'red';
      break;
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
    case 'unbreakable':
    color = 'violet';
    break;
     default:
      color = 'black';
      break;
  }

  passwordStrength.textContent = `password strength: ${strength}`;
  passwordStrength.style.color = color;
}

function redirectToRecommended() {
  window.location.href = 'recommended.html';
}

// Get the dark mode toggle icon
const darkModeToggle = document.getElementById('darkModeToggle');

// Add an event listener for the toggle icon
darkModeToggle.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');
});

let sessionTimeout;

// Function to reset the session timeout
function resetSessionTimeout() {
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(redirectTimeoutPage, 30000); // Timeout duration in milliseconds (30 seconds)
}

// Function to redirect to timeout.html
function redirectTimeoutPage() {
  window.location.href = 'timeout.html';
}

// Event listeners to reset the session timeout on user interaction
document.addEventListener('mousemove', resetSessionTimeout);
document.addEventListener('keypress', resetSessionTimeout);
document.addEventListener('click', resetSessionTimeout);

// Initial call to start the session timeout countdown
resetSessionTimeout();