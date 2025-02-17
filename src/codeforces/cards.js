const read = require("../utils/readWithReadline");

read(5, (readline) => {
  var multitestsCount = readline();
  var count = +multitestsCount;

  do {
    solve();
    count -= 1;
  } while (count > 0);

  function solve() {
    var a = readline().split(" ");
    var cowsCount = +a[0];
    var processedCards = [];

    for (var cow = 0; cow < cowsCount; cow++) {
      var cards = [];

      cards.push(
        readline()
          .split(" ")
          .forEach((card) => processedCards.push([cow + 1, +card]))
      );
    }

    processedCards.sort((a, b) => a[1] - b[1]);

    if (Math.abs(processedCards[0][1] - 1) !== 1) {
      print(-1);
      return;
    }

    var order = [];

    for (var card = 0; card < processedCards.length; card++) {
      if (order.length !== cowsCount) {
        order.push(processedCards[card][0]);
        continue;
      }

      if (order[card % cowsCount] !== processedCards[card][0]) {
        print(-1);
        return;
      }
    }

    print(order.join(" "));
  }
});
