function sum(num) {
    var result = String(num).split("").map(Number).reduce((total, curr) => total += curr);
    return result;
}
