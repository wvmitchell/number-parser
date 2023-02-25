const numbers = {
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
}

const multipliers = {
  hundred: 100,
  thousand: 1000,
  million: 1000000
}

const parser = (numString) => {
  let sum = 0;

  const words = numString.split(' ');

  const updateSum = (i) => {
    let currString = words[i];
    let currNum = numbers[currString];

    // base case
    if(!currString) {
      return;
    }

    // deal with hyphen
    if(currString.includes('-')) {
      currNum = unhyphenate(currString);
    }

    // if it's the last word, add to sum
    if(!words[i + 1]) {
      sum += currNum;

    // if 'and,' keep moving
    } else if(currString === 'and') {
      updateSum(i + 1);

    // if the next two words are multipliers ('hundred thousand'), perform math
    } else if(multipliers[words[i + 1]] && multipliers[words[i + 2]]) {
      sum += currNum * multipliers[words[i + 1]] * multipliers[words[i + 2]];
      updateSum(i + 3);

    // if the next single word is a multiplier...
    } else if(multipliers[words[i + 1]]) {

      // ...and there is 'thousand' written AFTER 'hundred', multiply current sum by 1,000 (would need to make this much more dynamic if millions came into play)
      if(words[i + 1] === 'thousand' && numString.split('thousand')[0].includes('hundred')) {
        sum += currNum;
        sum *= 1000;
        return updateSum(i + 2);
      }

      // ...otherwise, do the math for the single multiplier
      sum += currNum * multipliers[words[i + 1]];
      updateSum(i + 2);
    }
  }

  // start recursion
  updateSum(0);

  return sum;
}

// helpers:
const unhyphenate = (string) => {
  const nums = string.split('-');

  return numbers[nums[0]] + numbers[nums[1]];
}

module.exports = { parser };
