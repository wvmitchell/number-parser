const { sum, splitAt } = require('ramda')

const parseIntReloaded = (numberStr) => {
  let numberArr = numberStr.split(' ')
  let thousandIndex = numberArr.indexOf('thousand')
  let thousandsSplit = splitAt(thousandIndex + 1, numberArr)

  return sum(thousandsSplit.map(parseIntArray))
}

const parseIntArray = (numberArr) => {
  const total = numberArr.reduce((runningTotal, num, index) => {
    if(num == 'and') return runningTotal
    let value = parseIntBase(num)
    let isBaseMagnitude = value % 100 == 0

    if(isBaseMagnitude) {
      return runningTotal * value
    }
    return runningTotal + value
  }, 0)

  return total
}

const parseIntBase = (numberString) => {
  let partials = numberString.split('-')

  return partials.reduce((total, partial) => {
    return total + baseNums[partial]
  }, 0)
}

const baseNums = {
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
  hundred: 100,
  thousand: 1000,
  million: 1000000,
}


module.exports = parseIntReloaded
