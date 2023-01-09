const parser = require('../src/parser.js')

describe('parser', () => {
  test('it can parse zero', () => {
    expect(parser('zero')).toBe(0)
  })

  test.skip('it can parse single digits', () => {
    expect(parser('one')).toBe(1)
    expect(parser('two')).toBe(2)
    expect(parser('three')).toBe(3)
    expect(parser('four')).toBe(4)
    expect(parser('five')).toBe(5)
    expect(parser('six')).toBe(6)
    expect(parser('seven')).toBe(7)
    expect(parser('eight')).toBe(8)
    expect(parser('nine')).toBe(9)
  })

  test.skip('it can parse tweens and teens', () => {
    expect(parser('ten')).toBe(10)
    expect(parser('eleven')).toBe(11)
    expect(parser('twelve')).toBe(12)
    expect(parser('thirteen')).toBe(13)
    expect(parser('fourteen')).toBe(14)
    expect(parser('fifteen')).toBe(15)
    expect(parser('sixteen')).toBe(16)
    expect(parser('seventeen')).toBe(17)
    expect(parser('eighteen')).toBe(18)
    expect(parser('nineteen')).toBe(19)
  })

  test.skip('in can parse round tens', () => {
    expect(parser('twenty')).toBe(20)
    expect(parser('thirty')).toBe(30)
    expect(parser('forty')).toBe(40)
    expect(parser('fifty')).toBe(50)
    expect(parser('sixty')).toBe(60)
    expect(parser('seventy')).toBe(70)
    expect(parser('eighty')).toBe(80)
    expect(parser('ninety')).toBe(90)
  })

  test.skip('it can parse base ten magnitudes', () => {
    expect(parser('one hundred')).toBe(100)
    expect(parser('one thousand')).toBe(1000)
    expect(parser('one million')).toBe(1000000)
  })

  test.skip('it can parse two digit nums between 20 and 100', () => {
    expect(parser('forty-six')).toBe(46)
    expect(parser('fifty-five')).toBe(55)
    expect(parser('twenty-one')).toBe(21)
  })

  test.skip('it can parse numbers above 100', () => {
    expect(parser('one hundred one')).toBe(101)
    expect(parser('one hundred forty-six')).toBe(146)
    expect(parser('two hundred twenty-three')).toBe(223)
    expect(parser('two hundred forty-six')).toBe(246)
    expect(parser('eight hundred eighteen')).toBe(818)
  })

  test.skip('it can parse numbers above 1000', () => {
    expect(parser('one hundred thousand one')).toBe(100001)
    expect(parser('nine hundred thirty-eight thousand')).toBe(938000)
    expect(parser('one hundred twenty thousand two hundred forty-five')).toBe(120245)
    expect(parser('nine hundred forty-eight thousand six hundred fourteen')).toBe(948614)
  })

  test.skip("it can parse numbers that make use of 'and'", () => {
    expect(parser('one hundred and one')).toBe(101)
    expect(parser('nine hundred and thirty-eight thousand')).toBe(938000)
    expect(parser('nine hundred and forty-eight thousand six hundred and fourteen')).toBe(948614)
  })
})
