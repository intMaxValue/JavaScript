function validatePassword(password) {
  let valid = true;
  const lengthRegex = /^.{6,10}$/;
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  const digitRegex = /\d/g;

  if (!lengthRegex.test(password)) {
    console.log("Password must be between 6 and 10 characters");
    valid = false;
  }

  if (!alphanumericRegex.test(password)) {
    console.log("Password must consist only of letters and digits");
    valid = false;
  }

  if ((password.match(digitRegex) || []).length < 2) {
    console.log("Password must have at least 2 digits");
    valid = false;
  }

  if (valid) {
    console.log("Password is valid");
  }
}

validatePassword('MyPass123')