const read = require("../utils/readWithReadline");

read(3, (readline) => {
  const multitestsCount = readline();
  let count = +multitestsCount;

  do {
    solve();
    count -= 1;
  } while (count > 0);

  function solve() {
    const argsCount = 3;
    const args = [];

    for (let index = 0; index < argsCount; index++) {
      args.push(readline().split(" "));
    }

    const [a, b, c] = args;
    let max = 0;

    for (let index = 0; index < b.length; index++) {
      let tmp = 0;

      if (c[index + 1] === undefined) {
        max += +b[index];
      }

      if (+b[index] > +c[index + 1]) {
        max += +b[index] - +c[index + 1];
      }
    }

    console.log(max);
  }
});
