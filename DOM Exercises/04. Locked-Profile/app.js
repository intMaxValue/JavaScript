function lockedProfile() {
    let hidden = Array.from(document.querySelectorAll('.profile div'));
    let btns = Array.from(document.querySelectorAll('button'));
    
    btns.forEach((b) => {
        b.addEventListener('click', () => {
        let unlockBtns = b.parentElement.querySelector('input[value="unlock"]');
        
            if (unlockBtns.checked) {
                
                if (b.previousElementSibling.style.display === 'none' || b.previousElementSibling.style.display === '') {
                    b.previousElementSibling.style.display = 'block';
                    b.textContent = 'Hide it';
                }else{
                    b.previousElementSibling.style.display = 'none';
                    b.textContent = 'Show more';

                }
            }
            
    });
})}