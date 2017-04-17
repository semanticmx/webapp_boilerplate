import Greeting from './hello'

test('Greeting.greet', () => {
  const testGreet = new Greeting('WebApp!')
  expect(testGreet.greet()).toBe('Semantic Weapons WebApp!')
})
