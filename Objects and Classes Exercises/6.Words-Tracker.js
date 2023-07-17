function tracker(input) {
    let result = [];

    let words = input[0].split(' ');
    let text = input.splice(1)

    words.forEach(word => {
        result[word] = 0;
    })

    text.forEach(w => {
        words.forEach(word => {
            if (word === w) {
                result[word]++;
            }
        })
    })


    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    sorted.forEach(word => {
        console.log(`${word[0]} - ${word[1]}`)
    })
}


tracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    )