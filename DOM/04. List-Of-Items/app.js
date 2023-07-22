function addItem() {
    let newItem = document.querySelector('#newItemText').value;
    let element = document.createElement('li');
    element.innerHTML = newItem;
    document.querySelector('ul').appendChild(element);
}