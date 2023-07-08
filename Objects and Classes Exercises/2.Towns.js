function towns(input) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        
        [town, latitude, longitude] = input[i].split(' | ');
        
        let object = { town, latitude, longitude};

        object.latitude = Number(latitude).toFixed(2);
        object.longitude = Number(longitude).toFixed(2);

        output.push(object);
    }
    
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)