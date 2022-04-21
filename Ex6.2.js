const CountDuplicate = (str) => {
  const splitStr = str.split("");
  const objCounter = {};

  for (const char of splitStr) {
    const conditionCap = char >= "A" && char <= "Z";
    const conditionLower = char >= "a" && char <= "z";
    if (conditionCap || conditionLower) {
      let charLower = char.toLowerCase();
      if (objCounter[charLower] === undefined) objCounter[charLower] = 1;
      else objCounter[charLower]++;
    } else {
      console.log("Invalid input, use only A-Z, a-z");
      return false;
    }
  }
  let answer = "";
  for (const key in objCounter) {
    if (objCounter[key] > 1) {
      answer += key + " occurs " + objCounter[key] + " times";
    }
  }
  console.log(answer);
};

CountDuplicate("aabBcd2e");
