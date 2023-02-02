// Your code here
const numDict = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000
}

function dashSplit(num) {
    const dashSplit = num.split('-')
    const tens = dashSplit[0]
    const ones = dashSplit[1]
    return numDict[tens] + numDict[ones]
}

function hundredSplit(spaceSplit) {
    const firstMultiplier = spaceSplit[0]
    const magnitudeMultiplier = spaceSplit[1]
    const addition = spaceSplit[2] || ''
    let numToAdd;
    if (addition.includes('-') ) {
        numToAdd = dashSplit(addition)
    } else {
        numToAdd = numDict[addition] || 0
    }
    return (numDict[firstMultiplier] * numDict[magnitudeMultiplier]) + numToAdd 
}

function andRemover(array) {
    return array.filter(function(element) {
        return element !== 'and'
    })
}

module.exports = function parser(num) {
    if (num.includes(' ')) {
        const spaceSplit = andRemover(num.split(' '))
        if (spaceSplit.length > 2 && spaceSplit.includes('hundred') && spaceSplit.includes('thousand')) { 
            const beforeThousand = spaceSplit.slice(0, spaceSplit.indexOf('thousand'))
            const afterThousand = spaceSplit.slice(spaceSplit.indexOf('thousand') + 1, spaceSplit.length)
            return (hundredSplit(beforeThousand) * numDict['thousand']) + (afterThousand.length ? hundredSplit(afterThousand) || numDict[afterThousand] : 0)
        } else if (spaceSplit.length > 2 && spaceSplit.includes('hundred')) {
            return hundredSplit(spaceSplit)
        }
        const firstMultiplier = spaceSplit[0]
        const magnitudeMultiplier = spaceSplit[1]
        return numDict[firstMultiplier] * numDict[magnitudeMultiplier]
    }

    if (num.includes('-')) {
        return dashSplit(num)
    }

    return numDict[num]
}