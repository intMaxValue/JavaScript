// GET request
async function loadAllBooks() {
    let res = await fetch(BASE_URL);
    let allBooks = await res.json();
    let values = Object.values(allBooks);

// POST request
async function submitBook() {
    let title = titleCreate.value;
    let author = authorCreate.value;
    
    let headers = {
        method: 'POST',
        body: JSON.stringify({
        author: author,
        title: title,
        }),
    }

    await fetch (BASE_URL, headers)
    .then(() => {
        titleCreate.value = "";
        authorCreate.value = "";
        loadAllBooks();
    });
}

// DELETE request
async function deleteContact(e) {
    let parentLi = this.parentNode;
    
    await fetch (`http://localhost:3030/jsonstore/phonebook/${this.parentElement.id}`, {
        method: 'DELETE',
    })


   // createElement function
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