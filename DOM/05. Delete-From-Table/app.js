function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let emails = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let result = document.querySelector('#result');

    let emailToRemove = emails.find((e) => e.textContent === input.value);

    if (emailToRemove) {
        emailToRemove.parentElement.remove();
        result.textContent = `Deleted`;
        
    }
    else {
            result.textContent = `Not found.`;
        }
}
