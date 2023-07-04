function addAndSubtract(a, b, c) {
    let result = subtract(a, b, c)

    

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b, c) {
        return sum(a,b) - c;
    }
        
    return result
}

console.log(addAndSubtract(23, 6, 10))