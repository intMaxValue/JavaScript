function attachEvents() {
    const loadBtn = document.querySelector('#btnLoadPosts');
    const viewBtn = document.querySelector('#btnViewPost');
    const selectPosts = document.querySelector('#posts');

    let allPosts = [];
    

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', viewPost);

    function loadPosts() {
        fetch ('http://localhost:3030/jsonstore/blog/posts')
        .then(res => res.json())
        .then(posts => {
            Object.keys(posts)
            .forEach((key) => {
                let option = document.createElement('option');
                option.value = key;
                option.innerHTML = `${posts[key].title}`
                option.id = `${posts[key].id}`
                option.setAttribute('data-body', `${posts[key].body}`)
                
                
                
                selectPosts.appendChild(option);
                allPosts.push(option);
            })
            
        });

    }


    function viewPost(e) {
        fetch ('http://localhost:3030/jsonstore/blog/comments/')
        .then(res => res.json())
        .then(comments => {
            let ulComments = document.querySelector('#post-comments');
            ulComments.innerHTML = "";
            let postTitle = document.getElementById('post-title');
            let selectedElement = document.querySelector('#posts')
            
            
            
            
            
            let textSelected = selectedElement.options[selectedElement.selectedIndex].text;
            postTitle.textContent = textSelected;
            let commentsAll = Object.values(comments).filter(c => c.postId === selectedElement.options[selectedElement.selectedIndex].id);
            commentsAll.forEach(comm =>{
                let li = document.createElement('li');
                li.textContent = comm.text;
                
                ulComments.appendChild(li);
            })
            
            let postBody = document.querySelector('#post-body');
            postBody.textContent = selectedElement.options[selectedElement.selectedIndex].getAttribute('data-body');

        })
    }
}

attachEvents();