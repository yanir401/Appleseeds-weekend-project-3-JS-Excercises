const findUniq = (arr) => {
  if (arr.length >= 3) 
    let tempValue1, tempValue2;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        tempValue1 = arr[i];
        tempValue2 = arr[i + 1];
      }
    }
  }
};

findUniq([1, 0, 1]);
