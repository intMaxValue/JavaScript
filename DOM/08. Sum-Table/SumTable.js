function sumTable() {
    let prices = Array.from(document.querySelectorAll('td:nth-child(even)'));
    let total = prices.pop();
    let result = 0;
    console.log(total);
    for (let i = 0; i < prices.length; i++) {
        console.log(prices[i]);
        result += Number(prices[i].textContent);
    }

    total.textContent = result.toFixed(2);
}