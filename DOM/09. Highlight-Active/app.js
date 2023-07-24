function focused() {
    let inputs = Array.from(document.querySelectorAll('input[type="text"]'));

    inputs.forEach((input) => {
        input.addEventListener('focus', () => {
        input.parentNode.classList.add('focused');
    });
        input.addEventListener('blur', () => {
        input.parentNode.classList.remove('focused');
    });
    });
}