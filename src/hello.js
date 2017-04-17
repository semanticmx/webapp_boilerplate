// @flow

class Greeting {
  name: string

  constructor(name: string) {
    this.name = name
  }

  greet() {
    return `Semantic Weapons ${this.name}`
  }
}

export default Greeting
