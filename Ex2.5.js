const summation = (num) => {
  if (num > 0) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
      sum += i;
    }
    console.log(sum);
  }
};

summation(7);
