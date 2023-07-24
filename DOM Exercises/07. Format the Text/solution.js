function solve() {
  let text = Array.from(document.getElementById('input').value.split('.'));
  text.pop();
  let output = document.getElementById('output')
  
  
  console.log(text.length);
  while (text.length > 0) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text.splice(0, 3).join('.');
    paragraph.textContent += '.';
      output.appendChild(paragraph);
    }
  
}