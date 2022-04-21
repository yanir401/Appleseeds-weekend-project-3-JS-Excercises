const binaryToDecimal = (arr) => {
  let decimal = 0;
  let power = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    decimal += arr[i] * 2 ** power++;
  }
  console.log(decimal);
};

binaryToDecimal([1, 1, 1, 1]);
