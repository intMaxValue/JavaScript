function extractText() {
    let items = Array.from(document.querySelectorAll('li'));
    let output = items.map(e => e.textContent).join('\n');

    document.getElementById('result').textContent = output;
    
}