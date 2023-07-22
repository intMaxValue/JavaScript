function addItem() {
    let newItem = document.querySelector('#newItemText').value;
    let element = document.createElement('li');
    element.innerHTML = newItem;
    document.querySelector('ul').appendChild(element);
    
    let deleteElement = document.createElement('a');
    deleteElement.innerHTML = '[Delete]';
    deleteElement.setAttribute('href', '#');
    element.appendChild(deleteElement);
    deleteElement.addEventListener('click', function () {
        element.remove();
    })
    
}