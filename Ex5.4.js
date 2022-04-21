const toWeirdCase = (str) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const conditionCap = str[i] >= "A" && str[i] <= "Z";
    const conditionLower = str[i] >= "a" && str[i] <= "z";

    if (conditionCap || conditionLower || str[i] === " ")
      if (i % 2 === 1) newStr += str[i].toLowerCase();
      else if (i % 2 === 0) newStr += str[i].toUpperCase();
  }
  console.log("🚀 ~ file: Ex5.4.js ~ line 3 ~ toWeirdCase ~ newStr", newStr);
};

toWeirdCase("Weird string case");
