let a = []

console.log(a.constructor) // let a = new Array()
// 此时a为 Array构造函数的实例对象，实例对象的constructor指向构造函数

console.log(Array.isArray(a))

console.log(a instanceof Array)

let str = Object.prototype.toString.call(a)
console.log(str)


Object.prototype = {
  toString: function () {
    this.toString() // 使用call 后，此处的this 为 a
  }
}

