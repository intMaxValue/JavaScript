function phoneBook(input) {
    let pb = {};

    for (const i of input) {
        let [name, number] = i.split(" ");
        
        pb[name] = number;
        
    }

    for (const key in pb) {
        console.log(`${key} -> ${pb[key]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)