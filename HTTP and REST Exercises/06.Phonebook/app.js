function attachEvents() {
    const phoneBook = document.querySelector('#phonebook');
    
    const loadBtn = document.querySelector('#btnLoad');
    const createBtn = document.querySelector('#btnCreate');
    
    const personInput = document.querySelector('#person');
    const phoneInput = document.querySelector('#phone');

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContact);

    async function loadContacts() {
        phoneBook.innerHTML = '';

        let res = await fetch('http://localhost:3030/jsonstore/phonebook/')
        let phoneBookData = await res.json();
        Object.values(phoneBookData).forEach(p => {
            let li = document.createElement('li');
            li.textContent = `${p.person}: ${p.phone}`
            li.id = p._id;
            
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = `Delete`
            li.appendChild(deleteBtn);
            
            phoneBook.appendChild(li);

            deleteBtn.addEventListener('click', deleteContact);

            async function deleteContact(e) {
                let parentLi = this.parentNode;
                
                await fetch (`http://localhost:3030/jsonstore/phonebook/${this.parentElement.id}`, {
                    method: 'DELETE',
                })
                parentLi.remove();
            }
        })
    }

    async function createContact(){
        let person = personInput.value;
        let phone = phoneInput.value;

        let postRequest = {
            person: person,
            phone: phone
        }

        await fetch (`http://localhost:3030/jsonstore/phonebook`, {
            method: 'POST',
            body: JSON.stringify(postRequest)
        });

        personInput.value = "";
        phoneInput.value = "";

        await loadContacts();
    }
}

attachEvents();