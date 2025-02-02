const read = require("../utils/readWithReadline");

read(1, (readline) => {
  var multitestsCount = readline();
  var count = +multitestsCount;

  do {
    solve();
    count -= 1;
  } while (count > 0);

  function solve() {
    var argsCount = 1;
    var args = [];

    for (let index = 0; index < argsCount; index++) {
      args.push(readline().split(" "));
    }

    var a = args[0];

    var maxFib = 1;
    var map = {};

    for (var j = 0; j < a.length - 1; j++) {
      var x = j === 0 ? +a[j + 1] + +a[j] : +a[j + 1] - +a[j];

      if (map[x] === undefined) {
        map[x] = 1;
      } else {
        map[x] = map[x] + 1;
      }

      maxFib = Math.max(maxFib, map[x]);
    }

    console.log(maxFib);
  }
});
