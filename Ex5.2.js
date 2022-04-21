const repeatStr = (numOfIte, str) => {
  let combinedStr = "";
  for (let i = 0; i < numOfIte; i++) {
    combinedStr += str;
  }
  console.log(combinedStr);
};

repeatStr(6, "I");
repeatStr(5, "Hello");
