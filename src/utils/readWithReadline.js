const _readline = require("readline");

/**
 * @description Вспомогательная функция для локального тестирования задач codeforces
 */
function read(argsCount, callback) {
  const reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let multitestsCount = 0;
  let lines = 0;

  let lineIndex = 0;
  const args = [];

  function readline() {
    return args[lineIndex++];
  }

  reader.on("line", (line) => {
    lines += 1;
    args.push(line);

    if (lines === 1) {
      multitestsCount = +line;
      return;
    }

    if (
      // lines - первая линия кол-ва мультитестов
      (lines - 1) % argsCount === 0 &&
      // lines - первая линия кол-ва мультитестов
      (lines - 1) / argsCount === multitestsCount
    ) {
      callback(readline);
    }
  });
}

module.exports = read;
