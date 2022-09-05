const {shuffleArray, arr} = require('./utils')


describe('shuffleArray should', () => {
    expect(shuffleArray(arr).toHaveLength(arr.length))
})

describe('array should be shuffled', () => {
    expect(shuffleArray).toBe(true)
})