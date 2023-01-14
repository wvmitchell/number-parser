function parser(numberWords) {
  const matches = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100
  };

  // Remove " and" and split into array of words - need space to not remove thous"and"
  numberWordsWithoutAnd = numberWords.replaceAll(' and', '').split(' ');

  // Create a structure to store hundreds, thousands, millions places
  // Start from the right
  const sumDetails = numberWordsWithoutAnd.reduceRight((sumDetails, word, index) => {
    // check for thousand or million
    if (word === 'thousand' || word === 'million') {
      sumDetails.currentPlace = word;
    } else if (word.includes('-')) {
      // add hyphenated words together
      word.split('-').forEach(subWord => {
        sumDetails[sumDetails.currentPlace] += matches[subWord];
      });
    } else if (word === 'hundred') {
      // if encountering "hundred" look left to use the number
      sumDetails[sumDetails.currentPlace] += matches[numberWordsWithoutAnd[index - 1]] * 100;
    } else if (numberWordsWithoutAnd[index + 1] === 'hundred') {
      // if "hundred" is to the right, then ignore the word (do not add) and skip to next iteration
      return sumDetails;
    } else {
      sumDetails[sumDetails.currentPlace] += matches[word];
    }

    return sumDetails;
  }, {hundred: 0, thousand: 0, million: 0, currentPlace: 'hundred'});

  return sumDetails.hundred + sumDetails.thousand*1000 + sumDetails.million*1000000;
}

module.exports = parser;
