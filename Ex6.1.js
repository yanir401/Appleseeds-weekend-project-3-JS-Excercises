const accum = (str) => {
  let splitStr = str.split("");
  let newStr = "";

  for (let i = 0; i < splitStr.length; i++) {
    const conditionCap = str[i] >= "A" && str[i] <= "Z";
    const conditionLower = str[i] >= "a" && str[i] <= "z";
    if (conditionCap || conditionLower) {
      newStr += splitStr[i].toUpperCase();
      for (let j = 1; j <= i; j++) {
        newStr += splitStr[i];
      }
      if (i < splitStr.length - 1) newStr += "-";
    }
  }

  console.log(newStr);
};

accum("abcd");
