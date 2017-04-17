import Greeting from './hello'

test('Greeting.greet', () => {
  const testGreet = new Greeting('Test')
  expect(testGreet.greet()).toBe('Hello Test')
})
