module.exports = function check(str, bracketsConfig) {
  const bracketsPair = [];
  let currentIndex  = 0;

  bracketsConfig.forEach((item) => bracketsPair.push(item[0] + item[1]));

  while (bracketsPair.length > currentIndex) {
      if (str.includes(bracketsPair[currentIndex])) {
          str = str.replace(bracketsPair[currentIndex], '');
          currentIndex = 0;
      } else {
        currentIndex++;
      }
  }

  return str === '';
}