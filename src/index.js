module.exports = function toReadable(number) {
  const unitsRank = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenthRank = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const getNumeral = (number, possition) => {
    switch (possition) {
      case 'first':
        return +(number + '')[0];
      case 'second':
        return +(number + '')[1];
      case 'withoutFirst':
        return +((number + '').slice(1));

    }
  };

  const lessTwenty = number => unitsRank[number];

  const lessHundred = number => {
    const firstNumeral = getNumeral(number, 'first');
    const secondNumeral = getNumeral(number, 'second');
    return secondNumeral === 0
      ? tenthRank[firstNumeral]
      : tenthRank[firstNumeral] + ' ' + unitsRank[secondNumeral];
  };

  const lessThousand = number => {
    const firstNumeral = getNumeral(number, 'first');
    const secondNumeral = getNumeral(number, 'withoutFirst');
    return secondNumeral === 0
      ? unitsRank[firstNumeral] + ' hundred'
      : secondNumeral < 20
        ? unitsRank[firstNumeral] + ' hundred ' + lessTwenty(secondNumeral)
        : unitsRank[firstNumeral] + ' hundred ' + lessHundred(secondNumeral);
  };

  if (number < 20) {
    return lessTwenty(number);
  } else if (number < 100) {
    return lessHundred(number);
  } if (number < 1000) {
    return lessThousand(number);
  }

}
