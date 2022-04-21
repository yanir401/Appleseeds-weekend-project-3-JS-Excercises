const dotSeparate = (str) => {
  let splitStr = str.split(" ");
  splitStr[0] = splitStr[0][0].toUpperCase();
  splitStr[1] = splitStr[1][0].toUpperCase();
  console.log(splitStr.join("."));
};

dotSeparate("yanir itzhak");
