function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName('button');
  const [input, output] = document.getElementsByTagName('textarea');
  const tableBody = document.querySelector('tbody');
  

  generateBtn.addEventListener('click', () => {
    let parsedObject = JSON.parse(input.value);
    
    parsedObject.forEach(element => {
      createHTML(element);
    });
  });
  

  function createHTML(element) {
    let tr = document.createElement('tr');
    
    let img = element.img;
    let name = element.name;
    let price = element.price;
    let decFactor = element.decFactor;

    tr.innerHTML += `
    <td><img src="${img}"></td>
    <td><p>${name}</p></td>
    <td><p>${price}</p></td>
    <td><p>${decFactor}</p></td>
    <td><input type="checkbox"/></td>
    `;

    tableBody.appendChild(tr);
    input.value = "";
  }
  
  let names = [];
  let totalPrice = 0;
  let totalDecFactor = 0;

  buyBtn.addEventListener('click', () => {
    let buy = Array.from(tableBody.querySelectorAll('input[type=checkbox]:checked')).map((checkbox) => {
      let [name, price, decFactor] = Array.from(checkbox.parentNode.parentNode.children)
        .slice(1, 4)
        names.push(name.textContent);
        totalPrice += Number(price.textContent);
        totalDecFactor += Number(decFactor.textContent);
      });
      
      output.textContent = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor / buy.length}`;

    })
    

}