const findNextSquare = (param) => {
  let i;
  if (param % 2 === 0)
    //check odd or even to know how much to increment the index
    i = 0;
  else i = 1;
  while (i <= param) {
    console.log(i);
    if (i * i === param) break;
    i += 2;
  }
  if (i > param) return -1; //Means not perfect Square
  return ++i * i; // return the next perfect one
};

console.log(findNextSquare(900));
