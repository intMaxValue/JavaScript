function validate(pass) {
    const regexLetAndDig = new RegExp(/^[A-Za-z0-9]*$/)
    const regexTwoDigits = new RegExp("^(?=.*?\\d.*\\d)[a-zA-Z0-9]{8,}$")

    const isValid = true;

    if (pass.length < 6 || pass.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        isValid = false;
    }

    if (!regexLetAndDig.test(pass)) {
        console.log("Password must consist only of letters and digits")
        isValid = false;
    }

    if (!regexTwoDigits.test(pass)) {
        console.log("Password must have at least 2 digits")
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid')
    }
}

validate('Pa$s$s')