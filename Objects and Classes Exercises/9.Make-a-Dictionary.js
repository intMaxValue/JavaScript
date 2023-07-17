function combineStrings(strings) {
    let dictionary = {};
  
    // Parse and combine the strings into one object
    for (let i = 0; i < strings.length; i++) {
      const obj = JSON.parse(strings[i]);
      const term = obj.term;
      const definition = obj.description;
      dictionary[term] = definition;
    }
  
    // Sort the dictionary alphabetically by terms
    const sortedTerms = Object.keys(dictionary).sort();
  
    // Print each term and definition
    sortedTerms.forEach((term) => {
      const definition = dictionary[term];
      console.log(`Term: ${term} => Definition: ${definition}`);
    });
  }
  
  // Example usage
  const strings = [
    '{"term":"apple","description":"A fruit that grows on trees."}',
    '{"term":"banana","description":"A curved fruit with a yellow peel."}',
    '{"term":"apple","description":"A company that makes computers and smartphones."}'
  ];
  
  combineStrings(strings);
  