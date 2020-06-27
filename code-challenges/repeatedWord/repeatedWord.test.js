const repeatedWord = require('./repeatedWord.js')

describe('testing repeatedWords', () => {
  it('can handle a regular old string', () => {
    let string = 'Once upon a time, there was a brave princess who...'
    expect(repeatedWord(string)).toBe('a')

  })

  it('can handle a regular string without any crashes', () => {
    let string = 'Hello world.'
    expect(repeatedWord(string)).toBe(null)
  })

  it('can handle a string with numbers', () => {
    let string = 'good 2 go'
    expect(repeatedWord(string)).toBe(null)
  })

  it('can handle an empty string', () => {
    let string = ''
    expect(repeatedWord(string)).toBe(null)
  })

  it('can handle a crash with a word and not just a letter', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'
    expect(repeatedWord(string)).toBe('summer')
  })
})