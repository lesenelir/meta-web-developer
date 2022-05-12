// prototype 每一个构造函数都有一个原型对象
// 所有由构造函数实例化出来的对象都可以继承原型上的方法和属性

function Phone(color, brand) {
  this.color = color
  this.brand = brand
}

// Phone.prototype.rom = '64G'
// Phone.prototype.ram = '8G'
// // 方法一般都写在构造函数的原型上
// Phone.prototype.buy = function () {
//   console.log(this.brand +' Phone ')
// }
// 原型对象是一个普通的对象
Phone.prototype = {
  rom: '64G',
  ram: '8G',
  buy: function () {
    console.log(this.brand + ' Phone ')
  }
}

const phone1 = new Phone('red', '红米')
console.log(phone1)
phone1.buy()
console.log(Phone.prototype.__proto__) // [Object: null prototype] {}
// 原型对象是普通对象，普通对象的__proto__都指向Object.prototype
// 原型链的终点是Object.prototype


// Note: 一般而言，需要构造函数传值的属性写在构造函数中
//       需要写死的数据（实例公共的数据），例如，公共属性和方法，写在原型对象中
//

console.log("======================================")

console.log(phone1.constructor)
// 实例对象的constructor 指向构造函数本身
console.log(Phone.prototype.constructor)
// 原型对象中有constructor 隐式属性 - 该属性指向构造函数本身
console.log(phone1.constructor === Phone.prototype.constructor) // true


// Note： 实例对象的__proto__指向构造函数的prototype


console.log("=======================================")


function Car() {
}

Car.prototype.name = 'Rs4'

let car = new Car()

Car.prototype = {
  name: '911'
}
// 原型对象的修改如果在实例化之后，是不会生效的。因为，Car.prototype 重新开辟了一块空间，

console.log(car.name)


// Note:
//  只要是对象就有__proto__属性


console.log("======================================")


// 关于Object.prototype中的toString方法
// 对象都有toString方法
console.log(Object.prototype.toString())
// function Object() {}  // Object.prototype

// undefined、null(这两个不能经过包装类包装) 没有toString
let num = new Number(1)
console.log(num.toString()) // 1 (string类型)
