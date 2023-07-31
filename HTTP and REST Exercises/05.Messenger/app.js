function attachEvents() {
    const messagesArea = document.querySelector('#messages');

    const refreshBtn = document.querySelector('#refresh');
    const sendBtn = document.querySelector('#submit');

    const nameInput = document.querySelector('input[name="author"]');
    const messageInput = document.querySelector('input[name="content"]');

    refreshBtn.addEventListener('click', refresh);
    sendBtn.addEventListener('click', send);
    

    function refresh() {
        
        messages.textContent = "";
        fetch('http://localhost:3030/jsonstore/messenger')
        .then(res => res.json())
        .then((data) => {
            let allMessages = Object.values(data).map(d => `${d.author}: ${d.content}`);
            messages.textContent = allMessages.join('\n');
        })
        
    }


    function send() {
        const author = nameInput.value;
        const content = messageInput.value;
        const postData = {
            author: author,
            content: content
        }

        fetch ('http://localhost:3030/jsonstore/messenger', {
            method: 'POST',
            body: JSON.stringify(postData)
        })
        
        nameInput.value = "";
        messageInput.value = "";
        refresh();
    }
}

attachEvents();