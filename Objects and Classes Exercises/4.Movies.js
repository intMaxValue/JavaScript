function processMovies(input) {
    const movies = [];

    input.forEach(command => {
        if (command.includes("addMovie")) {
            let [ _, name ] = command.split("addMovie ");
            movies.push({name});
        }else if (command.includes("directedBy")){
            let [name, director ] = command.split(" directedBy ");
            let movie = movies.find(movie => movie.name === name) 
            if (movie) {
                movie.director = director;
            }
        }else if (command.includes("onDate")) {
            let [name, date] = command.split(" onDate ");
            let movie = movies.find(movie => movie.name === name)
            if (movie) {
                movie.date = date;
            }
        }
    });
    
    movies.filter(movie => movie.name && movie.date && movie.director).forEach(movie => console.log(JSON.stringify(movie)));
}


processMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);