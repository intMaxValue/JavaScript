function addressBook(input) {
    let addressBook = {};

    for (const key of input) {
        let [name, address] = key.split(':');
        addressBook[name] = address;
    }

    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let index = 0; index < sorted.length; index++) {
        let [name, address] = sorted[index];
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Bob:Huxley Rd',
'John:MilwaukeeCrossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:MestaCrossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
)