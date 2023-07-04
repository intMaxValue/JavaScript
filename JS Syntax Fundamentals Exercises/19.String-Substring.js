function find(word, text){
    let arr = text.split(" "); 

    for (let i = 0; i < arr.length; i++) {
        if (word.toLowerCase() === arr[i].toLowerCase()) {
            console.log(word)
            return;
        }
    }
    console.log(`${word} not found!`)
}

find('javascript', 'JavaScript is the best programming language')