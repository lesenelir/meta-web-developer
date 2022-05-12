// call apply bind 本质： 改变函数执行上下文，即：改变函数运行时的this指向

function test() {
  console.log('a')
}

test.call() // 等价于 test() - 隐式

function Car(brand, color) {
  this.brand = brand
  this.color = color
}

let newCar = {}

Car.call(newCar, 'Benz', 'red') // 把Car函数挂载到newCar对象下执行，即newCar为Car函数执行的执行上下文
// function Car(brand, color) {
//   newCar.brand = brand
//   newCar.color = color
// }

// Note: call 后面的参数（除了第一个参数）都是调用call的函数的参数

console.log(newCar) // { brand: 'Benz', color: 'red' }

Car.apply(newCar, ['Audi', 'black'])
console.log(newCar)


// Note: test() -> test.call()
