window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form');
    const container = document.querySelector('.all-hits-container');
    const savedContainer = document.querySelector(`.saved-container`);
    const inputs = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }

    const addBtn = document.getElementById('add-btn');
    
    const likesDiv = document.querySelector('.likes p');
    let likes = 0;

    addBtn.addEventListener('click', add);

    function add(event) {
        event?.preventDefault();
    
        for (const key in inputs) {
            if (inputs[key].value === "") {
                return;
            }
        }
    
        const hitsInfo = createElement('div', container, null, ["hits-info"]);
        let img = createElement('img', hitsInfo);
        img.src = "./static/img/img.png";
        let genreEl = createElement('h2', hitsInfo, `Genre: ${inputs.genre.value}`);
        let nameEl = createElement('h2', hitsInfo, `Name: ${inputs.name.value}`);
        let authorEl = createElement('h2', hitsInfo, `Author: ${inputs.author.value}`);
        let dateEl = createElement('h2', hitsInfo, `Date: ${inputs.date.value}`);
        let saveBtn = createElement('button', hitsInfo, `Save song`, ["save-btn"]);
        let likeBtn = createElement('button', hitsInfo, `Like song`, ["like-btn"]);
        let deleteBtn = createElement('button', hitsInfo, `Delete`, ["delete-btn"]);

        deleteBtn.addEventListener('click', deleteSong);
        likeBtn.addEventListener('click', likeSong);
        saveBtn.addEventListener('click', saveSong);

        form.reset();
    }
    
    function saveSong(event) {
        let song = this.parentNode;
        song.children[6].remove();
        song.children[5].remove();

        savedContainer.appendChild(song);
        
    }


    function deleteSong(event) {
        const hitsInfo = event.target.parentNode;
        hitsInfo.remove();
        
    }
    
    function likeSong(event) {
        this.disabled = true;
        likes++;
        likesDiv.textContent = `Total Likes: ${likes}`;

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