function addItem() {
    let menu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    console.log('click');
    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    menu.appendChild(option);

    text.value = "";
    value.value = "";
}