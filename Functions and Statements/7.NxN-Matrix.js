function matrix(num) {
    for (let i = 0; i < num; i++) {
        console.log((num.toString() + " ").repeat(num).trimEnd())
    }
}

matrix(9)