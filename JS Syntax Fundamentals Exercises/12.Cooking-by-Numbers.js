function cook(num, ...operations) {
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === "chop") {
            num /= 2;
            console.log(num)
        }else if (operations[i] === "dice") {
            num = Math.sqrt(num);
            console.log(num)
        }else if (operations[i] === "spice") {
            num++;
            console.log(num)
        }else if (operations[i] === "bake") {
            num *= 3;
            console.log(num)
        }else if (operations[i] === "fillet") {
            num *= 0.8;
            console.log(Number(num))
        }
    }
}
