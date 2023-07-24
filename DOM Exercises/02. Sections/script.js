function create(words) {
   let mainDiv = document.querySelector('#content');
   
   words.forEach(word => {
      let divElement = document.createElement('div');
      let paragraphElement = document.createElement('p');
      paragraphElement.textContent = word;
      paragraphElement.style.display = 'none';
      divElement.appendChild(paragraphElement);
      mainDiv.appendChild(divElement);

      divElement.addEventListener('click', () => {
         divElement.firstChild.style.display = 'block';
      })
   });
   
}