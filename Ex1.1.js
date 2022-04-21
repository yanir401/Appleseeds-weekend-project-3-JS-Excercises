const yesOrNo = (bool) => {
  if (typeof bool === "boolean") {
    if (bool === true) return "Yes";
    else return "No";
  }
  return "Invalid value";
};

console.log(yesOrNo(false));
