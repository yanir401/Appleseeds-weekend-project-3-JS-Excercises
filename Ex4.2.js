const fibonacciFuncSignature = (fibonacciSignature) => {
  if (fibonacciSignature.length === 3) return true;
  return false;
};

const Tribonacci = (fibonacciSignature, n) => {
  const ifValid = fibonacciFuncSignature(fibonacciSignature);

  if (n > 0 && ifValid) {
    for (let i = 2; i < n; i++) {
      const sumPrev =
        fibonacciSignature[i] +
        fibonacciSignature[i - 1] +
        fibonacciSignature[i - 2]; //sumPrev is the next value in the sequence
      fibonacciSignature.push(sumPrev);
    }
    // return fibonacciSignature[n];
    return fibonacciSignature;
  } else if (n == 0) {
    return [];
  } else return "Invalid input";
};

const result = Tribonacci([0, 0, 1], 3);

console.log(`The sequence is ${result}`);
