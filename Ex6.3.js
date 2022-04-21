const longest = (str1, str2) => {
  const combinedStr = str1.concat(str2);
  let newStr = [];
  for (const char of combinedStr) {
    const conditionCap = char >= "A" && char <= "Z";
    const conditionLower = char >= "a" && char <= "z";
    if (conditionCap || conditionLower) {
      let charLower = char.toLowerCase();
      if (!newStr.includes(charLower)) {
        newStr.push(charLower);
      }
    } else {
      console.log("Invalid input, use only A-Z, a-z");
      return false;
    }
  }
  newStr = newStr.sort().join("");
  return newStr;
};

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";

console.log(longest(a, b));
