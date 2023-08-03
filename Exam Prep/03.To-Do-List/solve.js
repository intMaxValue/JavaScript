// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    const loadAllBtn = document.querySelector('#load-button');
    const addBtn = document.querySelector('#add-button');

    const title = document.querySelector('#title');
    const toDoList = document.querySelector('#todo-list');

    loadAllBtn.addEventListener('click', loadAll);
    addBtn.addEventListener('click', add);

    async function loadAll(event) {
        event?.preventDefault();
        toDoList.innerHTML = "";

        let res = await fetch(BASE_URL);
        let data = await res.json();
        console.log(data);
        for (const key in data) {
            let item = Object.values(data[key]);
            
            let li = createElement('li', toDoList, null, null, item[1]);
            let name = createElement('span', li, item[0]);
            let removeBtn = createElement('button', li, 'Remove');
            let editBtn = createElement('button', li, 'Edit');

            removeBtn.addEventListener('click', remove);
            editBtn.addEventListener('click', edit);
        }

    }

async function add(event) {
    event?.preventDefault();

    let name = title.value;
    
    let body = JSON.stringify({
        name: `${name}`,
    })

    let headers = {
        method: 'POST',
        body: body
    } 

    await fetch(BASE_URL, headers)
    title.value = "";
    loadAll();
}

async function remove(event) {
    event?.preventDefault();

    let parentId = this.parentNode.id;
    const headers = {
        method: `DELETE`
    }
    await fetch(`${BASE_URL}${parentId}`, headers);

    loadAll();
}

async function edit(event) {
    event?.preventDefault();
    let parent = this.parentNode;
    let parentChildren = this.parentNode.children;
    
    let spanValue = parentChildren[0].textContent;
    let inputEl = document.createElement('input');
    inputEl.value = `${spanValue}`;
    parentChildren[0].remove();
    parent.prepend(inputEl);
    parentChildren[2].remove();
    
    let submitBtn = document.createElement('button');
    submitBtn.textContent = "Submit";

    parent.appendChild(submitBtn);
    
    submitBtn.addEventListener('click', () => {
        let id = parent.id;

        let body = JSON.stringify({
            name: `${parentChildren[0].value}`,
        });

        let headers = {
            method: 'PATCH',
            body: body
        }

        fetch(`${BASE_URL}${id}`, headers)
        .then(() => {
            loadAll();
        });
        
    });
}


function createElement(type, parent, textContent, classes, id, useInnerHtml) {
    let element = document.createElement(type);
    if (useInnerHtml && textContent) {
        element.innerHTML = textContent;
        } else if (textContent) {
        element.textContent = textContent;
        }
        if (classes && classes.length > 0) {
        element.classList.add(...classes);
        }
        if (id) {
        element.setAttribute("id", id);
        }
        if (parent) {
        parent.appendChild(element);
        }
        return element;
    }
}

attachEvents();
