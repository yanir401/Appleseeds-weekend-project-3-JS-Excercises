const shortestWord = (str) => {
  if (str.length > 0 && typeof str === "string") {
    const splitStr = str.trim().split(" ");

    const shortestWord = splitStr.reduce((shortestWord, currentWord) => {
      if (shortestWord.length > currentWord.length) return currentWord;
      return shortestWord;
    });
    return shortestWord.length;
  }
};

console.log(shortestWord("  hi how are you my dear i"));
