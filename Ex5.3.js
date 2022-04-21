const toCamelCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      const conditionCap = str[i + 1] >= "A" && str[i + 1] <= "Z";
      const conditionLower = str[i + 1] >= "a" && str[i + 1] <= "z";
      if (conditionCap || conditionLower) {
        newStr += str[i + 1].toUpperCase();
        i++;
      }
    } else newStr += str[i];
  }
};

toCamelCase("hi_s-_dsa");
