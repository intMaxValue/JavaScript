function list(names) {
    let arr = names.sort();
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${arr[i]}`)
    }
}

list(["John",
"Bob",
"John",
"Ema"]
)