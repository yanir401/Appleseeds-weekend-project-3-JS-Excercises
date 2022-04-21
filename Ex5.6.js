const masking = (str) => {
  if (typeof str === "string") {
    let maskStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i >= str.length - 4) maskStr += str[i];
      else maskStr += "#";
    }
    console.log(maskStr);
  }
};

masking("Nananananananananananananananana Batman!");
