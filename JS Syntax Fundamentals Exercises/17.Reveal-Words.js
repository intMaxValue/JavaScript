function reveal(words, sentence) {
    words = words.split(", ");

    for (let word of words) {
        sentence = sentence.replace("*".repeat(word.length), word);
    }

    console.log(sentence)
}

