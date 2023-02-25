const parser = (numString) => {
    const map = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
        eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
        twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
        hundred: 100, thousand: 1000, million: 1000000
    };
    const nums = numString.split(/\-|\ /).filter(numStr => numStr !== 'and').map(numStr => map[numStr]);

    let subTotal = 0;
    let grandTotal = 0;

    nums.forEach(num => {
        if(Number.isInteger(Math.log10(num)) && num > 99) {
            subTotal = subTotal * num;
            if(num > 100) {
                grandTotal += subTotal;
                subTotal = 0;
            }
        } else {
            subTotal += num;
        }
    })

    grandTotal += subTotal;
    return grandTotal;
}

module.exports = parser;
