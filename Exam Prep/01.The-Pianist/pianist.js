function solve(input) {
    let n = Number(input.shift());
    let pieces = {};

    let commandParser = {
        Add : addPiece,
        Remove : removePiece,
        ChangeKey : changeKey
    }

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = {composer: composer, key: key};
    }

    for (const line of input) {
        if (line === 'Stop') {
            for (const piece in pieces) {
                console.log(`${piece} -> Composer: ${pieces[piece].composer}, Key: ${pieces[piece].key}`);
            }
            return;
        }
        
        let command = line.split('|').shift();
        commandParser[command]([line]);
    }

    function addPiece([params]) {
        let [_, piece, composer, key] = params.split('|');
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = {composer: composer, key: key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }else{
            console.log(`${piece} is already in the collection!`);
        }
    }
    
    function removePiece([params]) {
        let [_, piece] = params.split('|');
        if (pieces.hasOwnProperty(piece)) {
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey([params]) {
        let [_, piece, newKey] = params.split('|');
        if (pieces.hasOwnProperty(piece)) {
            pieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    
}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'  
    ]
)