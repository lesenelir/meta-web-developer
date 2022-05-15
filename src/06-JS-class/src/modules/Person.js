class Person {
  constructor(name, height, weight) {
    this.name = name
    this.height = height
    this.weight = weight
  }

  eat() {
    console.log('吃饭')
  }

  sleep() {
    console.log('睡觉')
  }
}

export {Person}
