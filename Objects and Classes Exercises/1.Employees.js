function employees(input) {
    let result = {}
    
    for (const employee of input) {
        let number = employee.length;

        result[employee] = number;
    }

    for (const person in result) {
        console.log(`Name: ${person} -- Personal Number: ${result[person]}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])