const obj = require('./09-root')
const {x, foo5} = require('./09-root').objRoot // require是一个对象
// 引入对象下的objRoot属性

const foo1 = 'foo1'

const baz = {foo1} // 键名和属性名一致的简写
console.log(baz) // { foo1: 'foo1' }

// 对象方法的扩展 es6写法
const name = 'lesenelir'
const person = {
  name,
  hello() {
    console.log(this.name)
  }
}
person.hello()

// 箭头函数返回对象
let f1 = (a = 1, b = 2) => ({a, b})
console.log(f1()) // { a: 1, b: 2 }

// 通过commonjs方式引入
console.log(obj)
console.log(x, foo5)


// for in 会遍历到原型上的方法和属性


// 属性拼接
let o = {}
o.flag = true
o['f' + 'l' + 'a' + 'g'] = false // 属性拼接也可以访问对象的属性
console.log(o) // {flag: false}


// 对象的属性是对象的访问
let o1 = {}
o1[o1] = 'bar'
console.log(o1) // { '[object Object]': 'bar' }
// 把toString方法挂载到o1下执行
console.log(Object.prototype.toString.call(o1)) // [object Object]
// 所以对象的属性是对象时，访问的方法是: [object Object]
console.log(o1['[object Object]']) // bar
// 总结： 对象的key转换的时候会调用toString方法


const x1 = {a : 1}
const x2 = {b : 2}
const o3 = {
  [x1]: 'valueA',
  [x2]: 'valueB'
}
console.log(o3) // { '[object Object]': 'valueB' }

// 对象作为key，会先被隐式转换为字符串，其值为[object Object]


// 属性描述符
/*

getOwnPropertyDescriptor配置项:
  configurable(可配置)
  enumerable 可枚举
  writable 可写
  value 值

*/

// defineProperty 修改一个已有属性，添加一个新的方法
let o4 = {}
// 给对象添加一个属性
Object.defineProperty(o4, 'a', {
  value: 2,
  enumerable: true,
  writable: false,  // 属性值不可写（属性值不可更改）
  configurable: true
})

console.log(o4) // {a: 2}
// 输出对象属性的描述
console.log(Object.getOwnPropertyDescriptor(o4, 'a'))
o4.a = 1  // 属性静默失败 - 严格模式报错
console.log(o4) // {a: 2} - 由于属性值不可更改，a的值还是为2


// getter | setter -> 属性描述符
// get操作（查找当前属性，如果没有则查找原型） put操作（赋值）

let o5 = {
  log: ['example', 'test'],
  // 通过get，重新写了对象属性的方法
  get latest() { // get方法 伪属性
    if (this.log.length === 0) {
      return undefined
    }
    return this.log[this.log.length - 1]
  }
}

console.log(o5.latest) // 访问这个属性(方法)，本质上是调用这个方法


let o6 = {
  get a() {
    return 1
  }
}
console.log(o6.a)

Object.defineProperty(o6, 'b', {
  get: function () {
    return this.a * 2
  },
  enumerable: true
})
console.log(o6.b)


// setter
let o7 = {
  log: [],
  set current(name) {
    this.log.push(name)
  }
}

o7.current = 'EN'
