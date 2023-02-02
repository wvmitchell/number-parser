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

function convertSimpleDash(num, dict) {
    const dashSplit = num.split('-')
    const tens = dashSplit[0]
    const ones = dashSplit[1]
    return dict[tens] + dict[ones]
}

function convertSimpleSpace(numArray, dict) {
    const firstMultiplier = numArray[0]
    const magnitudeMultiplier = numArray[1]
    return numDict[firstMultiplier] * numDict[magnitudeMultiplier] 
}

function convertHundreds(numArray, dict) {
    const firstMultiplier = numArray[0]
    const magnitudeMultiplier = numArray[1]
    const addition = numArray[2] || ''
    let numToAdd;
    if (addition.includes('-') ) {
        numToAdd = convertSimpleDash(addition, dict)
    } else {
        numToAdd = dict[addition] || 0
    }
    return (dict[firstMultiplier] * dict[magnitudeMultiplier]) + numToAdd 
}

function convertThousands(numArray, dict) {
    const beforeThousand = numArray.slice(0, numArray.indexOf('thousand'))
    const afterThousand = numArray.slice(numArray.indexOf('thousand') + 1, numArray.length)
    return (convertHundreds(beforeThousand, dict) * dict['thousand']) + (afterThousand.length ? convertHundreds(afterThousand, dict) || dict[afterThousand] : 0) 
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
            return convertThousands(spaceSplit, numDict)
        } else if (spaceSplit.length > 2 && spaceSplit.includes('hundred')) {
            return convertHundreds(spaceSplit, numDict)
        }
        return convertSimpleSpace(spaceSplit)
    }

    if (num.includes('-')) {
        return convertSimpleDash(num, numDict)
    }

    return numDict[num]
}