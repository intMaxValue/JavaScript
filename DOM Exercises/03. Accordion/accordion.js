function toggle() {
    let btn = document.querySelector('.button');
    let content = document.querySelector('#extra');
    console.log(content);
    console.log(btn);
    if(btn.textContent === 'More'){
        content.style.display = 'block';
        btn.textContent = 'Less';
    }else{
        content.style.display = 'none';
        btn.textContent = 'More';
    }
}