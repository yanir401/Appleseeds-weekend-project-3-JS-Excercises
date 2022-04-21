const peopleOnTheBus = [
  [12, 0],
  [5, 2],
  [10, 2],
  [15, 2],
  [6, 2],
  [2, 5],
  [0, 7],
];

const peopleStillOnTheBus = (array) => {
  let peopleStillOnTheBus = 0;

  for (const ele of array) {
    peopleStillOnTheBus = peopleStillOnTheBus + (ele[0] - ele[1]);
    if (peopleStillOnTheBus < 0) {
      return `The number of people on the bus cannot be negative`;
    }
    return peopleStillOnTheBus;
  }
};

console.log(peopleStillOnTheBus(peopleOnTheBus));
