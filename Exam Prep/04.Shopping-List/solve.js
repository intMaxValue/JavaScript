function solve(input) {
    let products = [];

    let commands = {
        Urgent: urgent,
        Unnecessary: unnecessary,
        Correct: correct,
        Rearrange: rearrange,
    }

    let initial = input.shift().split('!').map(p => products.push(p));
    
    for (const line of input) {
        if (line === "Go Shopping!") {
            console.log(products.join(', '));
            return;
        }

        let commandInput = line.split(' ')
        let command = commandInput.shift();

        commands[command]([commandInput]);
    }


    function urgent([params]) {
        let item = params[0];

        if (!products.includes(item)) {
            products.unshift(item);
        }
    }


    function unnecessary([params]) {
        let itemToRemove = params[0];

        const index = products.findIndex(item => item === itemToRemove);

        if (index !== -1) {
        products.splice(index, 1);
        }
    }

    function correct([params]) {
        let oldItem = params[0];
        let newItem = params[1];

        const index = products.findIndex(item => item === oldItem);

        if (index !== -1) {
        products[index] = newItem;
        }
    }

    function rearrange([params]) {
        let itemToRearrange = params[0];
        let index = products.findIndex(item => item === itemToRearrange);
        if (index !== -1) {
            let newItem = products[index];
            products.splice(index, 1);
            products.push(newItem);
            }
    }

    
}

solve(
    (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Unnecessary Milk",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
);