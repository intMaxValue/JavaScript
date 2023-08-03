window.addEventListener("load", solve);

function solve() {
  const previewList = document.getElementById("preview-list");

  const inputs = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    genre: document.getElementById("genre"),

    story: document.getElementById("story"),
  }

  const formBtn = document.getElementById("form-btn");
  formBtn.addEventListener("click", publish);

  function publish() {
    formBtn.setAttribute("disabled", true);
    for (const input in inputs) {
      if (inputs[input].value === "") {
        return;
      }
    }
    
    previewList.innerHTML = '<h3>Preview</h3>'
    
    let li = createElement("li", previewList, null, ['story-info']);
    let article = createElement('article', li);
    let name = createElement('h4', article, `Name: ${inputs.firstName.value} ${inputs.lastName.value}`);
    let age = createElement('p', article, `Age: ${inputs.age.value}`);
    let title = createElement('p', article, `Title: ${inputs.storyTitle.value}`);
    let genre = createElement('p', article, `Genre: ${inputs.genre.value}`);
    let story = createElement('p', article, `${inputs.story.value}`);
    
    let saveBtn = createElement('button', li, 'Save Story', ['save-btn']);
    let editBtn = createElement('button', li, 'Edit Story', ['edit-btn']);
    let deleteBtn = createElement('button', li, 'Delete Story', ['delete-btn']);
    
    
    
    let data = {
      firstName: inputs.firstName.value,
      lastName: inputs.lastName.value,
      age: inputs.age.value,
      storyTitle: inputs.storyTitle.value,
      genre: inputs.genre.value,
      story: inputs.story.value
    }
    for (const input in inputs) {
      inputs[input].value = "";
      
    }
    
    
    editBtn.addEventListener('click', edit);
    deleteBtn.addEventListener('click', deletePost);
    saveBtn.addEventListener('click', savePost);

    function edit() {
      for (const input in inputs) {
        inputs[input].value = data[input];
      }
      let storyInfo = document.querySelector('.story-info');
      storyInfo.remove();
      saveBtn.setAttribute('disabled', true);
      editBtn.setAttribute('disabled', true);
      deleteBtn.setAttribute('disabled', true);

      formBtn.removeAttribute("disabled");  
    }


    function deletePost() {
      this.parentNode.remove();
      formBtn.removeAttribute('disabled')
    }
  }

  function savePost() {
    const main = document.getElementById('main')
    main.innerHTML = `<h1>Your scary story is saved!</h1>`
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
