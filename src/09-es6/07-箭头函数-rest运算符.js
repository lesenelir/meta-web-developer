/**
 *  this指向：
 *    1. 默认绑定规则： window - 严格模式 undefined
 *    2. 隐式绑定： 谁调用就绑定谁
 *    3. 显示绑定： call apply bind
 *    4. new方式
 *
 *  箭头函数：
 *    1. 箭头函数的this是由外层函数作用域决定的
 *    2. 箭头函数不能当做构造函数
 *    3. 箭头函数没有arguments对象，用rest运算符替代
 *    4. yield 命令在 generator函数中不能生效
 *
 *  适合箭头函数使用场景：
 *    1. 简单的表达函数表达式，得出唯一的return计算值，函数内部没有this
 *       没有递归、没有事件绑定、没有解绑定，用重构 => 的方式
 *    2. 内层的函数表达式需要调用this
 *    3. let args = Array.prototype.slice.call(arguments) 这种情况可以用箭头函数
 *
 *
 */

// 参数一个省略括号，一条语句可以省略return
let f = a => a

// 箭头函数表达式
let f1 = (a) => {
  return a
}

let f2 = () => 5

let f3 = (a, b) => {

}
console.log(f3()) // undefined 箭头函数的默认返回值也是undefined

// 解构赋值 + 箭头函数
const full = ({first, last} = {}) => {
  return first + ' ' + last
}

console.log(full({first: 3, last: 5})) // 3 5

// 箭头函数没有arguments

// ... 剩余运算符 rest运算符
// 用途：展开、收集
let f4 = (...args) => { // ...args 可以收集到实参的值
  console.log(args) // 数组
}

f4(1, 3)


let f5 = (x, y, z) => {
  console.log(x, y, z)
}
f5(...[1, 2, 3]) // rest运算符展开数组

/**
 * Note：
 *  1. ...用于函数参数 是为了收集参数转为一个数组 （收集）
 *     ... 用于函数参数必须是数组的最后一个参数
 *  2. ...用于数组，是为了展开数组的元素 （展开）
 *
 */

let a = [1, 2, 3]
let b = [1, ...a, 4]
let c = [...a]
console.log(b) // 展开数组
console.log([1].concat(a, [5])) // es5写法
// concat的调用和传入的参数都应该要是一个数组


function sortNum() {
  let arr = Array.prototype.slice.call(arguments) // arguments转真正数组
  arr.sort((a, b) => {
    return a - b
  })
}

let sortNum2 = (...args) => { // 剩余参数
  return args.sort((a, b) => a - b)
}


// 箭头函数的this
function f6() {
  console.log(this) // obj1
  return () => {
    console.log(this.a)
  }
}
let obj1 = {a: 2}
let obj2 = {a: 3}
let bar = f6.call(obj1) // f6挂载到obj1执行，此时this为obj1，返回的箭头函数赋值给变量bar
bar.call(obj2) // 2 把箭头bar挂载到obj2执行，但由于是箭头函数，this还是obj1


const person = {
  eat() {
    console.log(this)
  },
  drink: () => {
    console.log(this)
  }
}

person.eat() // person
person.drink() // {}


// 箭头函数arguments不存在
function f7() {
  setTimeout(() => {
    console.log(arguments) // 此处的arguments是外层函数的arguments
  }, 1000)
}
f7(1,2,3,4)







