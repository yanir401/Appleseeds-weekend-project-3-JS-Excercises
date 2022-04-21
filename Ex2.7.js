const basicOp = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      console.log("We dont support that operation");
  }
};
console.log(basicOp("/", 10, 2));
