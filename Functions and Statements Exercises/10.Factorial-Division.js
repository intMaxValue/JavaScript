function factorialDivision(num1, num2) {
    let factorialNum1 = factorial(num1);
    let factorialNum2 = factorial(num2);

    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        else{
            return n * factorial(n-1);
        }
    }

    console.log(`${(factorialNum1 / factorialNum2).toFixed(2)}`)
}

factorialDivision(5, 2)