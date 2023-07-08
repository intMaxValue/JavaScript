function processMovies(input) {
    const movies = [];

    for (let j = 0; j < input.length; j++) {
        let curr = input[j].split(' ');
        
        if (curr[0] === "addMovie") {
            curr.shift();
            movies.push({name: curr.join(' ')});
            continue;
        }

        if (curr.includes("directedBy")) {
            let [movie, director] = curr.toString().split(" directedBy ")

            console.log();
        }
    }
}


processMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);