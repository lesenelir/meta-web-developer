
// forin 遍历对象
let car = {
  brand: 'Benz',
  color: 'red',
  displacement: '3.0'
}

for (const key in car) {
  // console.log(car.key) // undefined
  console.log(key + ': ' + car[key])
}

// Note: car.key -> car['key'] 对象中没有key属性，所以访问不到

console.log(car.hasOwnProperty(car.color)) // false


function Car() {
  this.brand = 'Benz'
  this.color = 'red'
  this.displacement = '3.0'
}

Car.prototype = {
  lang: 5,
  width: 2.5
}

let carObj = new Car()
console.log(carObj)

for (const key in carObj) {
  if (car.hasOwnProperty(key)) {  // 找对象自身的属性，不找原型上的属性
    console.log(key + ': ' + car[key])
  }
}

// for (const entry of Object.entries(carObj)) {
//   console.log(entry)
// }
