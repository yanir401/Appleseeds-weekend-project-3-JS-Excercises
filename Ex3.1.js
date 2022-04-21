const nbYear = (p0, percent, aug, p) => {
  console.log(100 - percent / 100);
  if (
    typeof aug === "number" &&
    (percent > 0 || percent === null) &&
    p0 > 0 &&
    p > 0
  ) {
    let numOfYears = 0;
    let currentPopulation = p0;
    while (!(currentPopulation >= p)) {
      currentPopulation =
        currentPopulation + (currentPopulation * percent) / 100 + aug;
      numOfYears++;
    }
    console.log(`We should wait ${numOfYears} to be ${p} population`);
  }
};

nbYear(1500, 5, 100, 5000);
