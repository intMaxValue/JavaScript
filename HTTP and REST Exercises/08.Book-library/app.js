function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books'
  const loadBooksBtn = document.querySelector('#loadBooks');
  const tbody = document.querySelector('tbody');

  const titleCreate = document.querySelector('input[name="title"]');
  const authorCreate = document.querySelector('input[name="author"]');
  const submitBtn = document.querySelector('#form button');

  loadBooksBtn.addEventListener('click', loadAllBooks);
  submitBtn.addEventListener('click', submitBook);

  async function loadAllBooks() {
    let res = await fetch(BASE_URL);
    let allBooks = await res.json();
    tbody.innerHTML = "";
    let values = Object.values(allBooks);
    
    for (const book of values) {
      let row = tbody.insertRow();
      row.id = book._id;
      let bookTitle = document.createElement('td');
      bookTitle.textContent = book.title;
      let bookAuthor = document.createElement('td');
      bookAuthor.textContent = book.author;
      row.appendChild(bookTitle);
      row.appendChild(bookAuthor);
  
      let actions = document.createElement('td');
      let editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      row.appendChild(actions);
      tbody.appendChild(row);

      editBtn.addEventListener('click', editBook);
      deleteBtn.addEventListener('click', deleteBook);
    }
  }
  
  async function editBook() {
    let trElement = this.parentNode.parentNode.children;
    let currTitle = trElement[0].textContent;
    let currAuthor = trElement[1].textContent;

    titleCreate.value = currTitle;
    authorCreate.value = currAuthor;
  }

  async function deleteBook() {
    let trElement = this.parentNode.parentNode;
    
  }

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
}

attachEvents();