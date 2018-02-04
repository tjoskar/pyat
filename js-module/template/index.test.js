const { amIAwesome } = require('./')

test(`I'm awesome`, () => {
  // Act
  const result = amIAwesome()

  // Assert
  expect(result).toBe(true)
})
