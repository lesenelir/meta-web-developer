// 1. 对象字面量
let obj = {
  name: 'lee1',
  sex: 'male'
}
console.log(obj)


// 2. 系统自带的构造函数
let obj2 = new Object() // 与对象字面量相等 - 此处的Object是一个方法
// console.log(Object.__proto__ === Function.prototype) // true
// 此处的Object 是一个函数对象，函数对象的__proto__指向函数的原型对象
obj2.name = 'lee2'
obj2.sex = 'male'
console.log(obj2)

// 3. 自定义的构造函数
function Teacher(name, sex) {
  // 调用产生AO对象:
  /**
   *  this = {
   *    name: name,
   *    sex: sex
   *    smoke: function
   *  }
   *  return this
   */
  this.name = name
  this.sex = sex
  this.smoke = function () {
    console.log(this.name + ' - ' + this.sex)
  }
  // return '123'
  // return []
  // return {}
  // return function () {}
  // 特点：构造函数中return 一个 引用值 后会影响this的指向 - 构造函数中会隐藏return this
}
// 构造函数中的this 是指代 对象
// 【本质】： 不管在哪里，this 永远都是一个对象

let teacher = new Teacher('lee3', 'male')
console.log(teacher)

// 【关键】： new 实质就是return 一个 this， 把这个this对象 赋值给teacher


// 构造函数 传入参数 （vue底层的构造函数就是这么处理的）
function Person(opt) {
  this.name = opt.name
  this.age = opt.age
  this.yearUp = function () {
    this.age++
    console.log(this.age)
  }
}
let p = new Person({
  name: 'newP',
  age: 18
})
p.yearUp()
console.log(p)

console.log("==============================")

// 构造函数，参数不定，完成参数相加、相乘操作
function Calculate(...args) {
  // console.log(args) // 剩余参数，拿到的是一个数组
  this.add = function () {
    let res = 0
    for (let i = 0; i < args.length; i++) {
      res += args[i]
    }
    return res
  }
  this.multi = function () {
    let res = 1
    for (let i = 0; i < args.length; i++) {
      res *= args[i]
    }
    return res
  }
}

let res = new Calculate(1, 2, 3, 4)
// console.log(res)
let sumNum = res.add()
console.log(sumNum)
let multiNum = res.multi()
console.log(multiNum)
