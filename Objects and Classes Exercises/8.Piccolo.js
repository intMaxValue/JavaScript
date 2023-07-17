function solve(input) {
    let parking = new Set;
    input.forEach(c => {
        if (c.includes('IN')) {
            parking.add(c.split(', ')[1]);
        } else {
            parking.delete(c.split(', ')[1]);
        }
    })
    let sorted = Array.from(parking)

    if (parking.size === 0) {
    console.log("Parking Lot is Empty")
    }else{
    sorted.sort((a, b) => a.localeCompare(b)).forEach(c => {
        console.log(c);
    })}
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])