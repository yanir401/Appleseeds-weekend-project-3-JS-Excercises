const fibonacciFunc = (n) => {
  if (n >= 0 && typeof n === "number") {
    const fibonacciSequence = [0, 1];
    for (let i = 1; i < n; i++) {
      const sumPrev = fibonacciSequence[i] + fibonacciSequence[i - 1]; //sumPrev is the next value in the sequence
      fibonacciSequence.push(sumPrev);
    }
    return fibonacciSequence[n];
  }
  return "Invalid value";
};
console.log(fibonacciFunc(20));
