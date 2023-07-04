function findSpecialWords(inputString) {
  const words = inputString.split(" ");

  const specialWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.startsWith("#")) {
      const specialWord = word.slice(1);

      if (/^[a-zA-Z]+$/.test(specialWord)) {
        specialWords.push(specialWord);
      }
    }
  }

  for (let i = 0; i < specialWords.length; i++) {
    console.log(specialWords[i]);
  }
}

const input =
  "The symbol # is known #variously in English-speaking #regions as the #number sign";
findSpecialWords(input);
