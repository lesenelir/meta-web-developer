/**
 * JavaScript 一等公民：函数
 *
 *  JS函数作用：
 *    - 声明、调用、赋值、传参、返回、构造函数、类实例
 *
 *  程序开发体系 = 函数式编程 + 设计模式 + 面向对象
 *
 */

// 函数作为参数 函数作为返回值
function add(a, b) {
  return a + b
}

function minus(a, b) {
  return a - b
}

function compute(a, b, fn) {
  return fn(a, b)
}

let res = compute(1, 2, add)
console.log(res)

// 构造函数
function Compute(a, b) {
  this.a = a
  this.b = b

  this.add = function () {
    return this.a + this.b
  }

  this.minus = function () {
    return this.a - this.b
  }
}

let c = new Compute(10, 1)
console.log(c.add())


/**
 *  JS编程特点：
 *    - 函数式编程 + 面向对象编程的混编语言
 *    - 可扩展性强
 *    - 优点：编程灵活、易学
 *    - 缺点：不可控
 *
 *  面向对象和函数式编程的关系
 *    - 面向对象是由短板的，除非是高度复用性
 *    - 程序的高度服用才是面向对象的意义，如果没有高度复用，则可以不用面向对象
 *
 *  函数式编程特点：
 *    - 定义：函数是第一类对象，不依赖任何其他对象独立存在
 *    - 易读、易维护
 *
 *  纯函数：
 *    - 定义：相同的输入得到相同的输出，不依赖且不影响外部环境也不产生任何副作用
 *           ===> 输出完全取决于输入
 *    - 副作用：
 *      - 只要跟函数外部环境发生了交互就是副作用
 *      - 例如：函数内发送ajax请求、改变外部数据、函数内部使用console.log
 *             DOM操作（依赖DOM节点）、数据存储
 *    - 纯函数好处：
 *      - 可测试
 *      - 可移植
 *      - 纯函数不依赖外部环境，在服务端可以同时运行（竞争态）
 *      - 可缓存性
 *
 *  目标：程序应该直接、简洁、易维护，不要为了写纯函数而写纯函数
 *
 */

// 纯函数说明
let a = 1
function test() { // 不是纯函数，函数内部依赖于外部变量
  console.log(a)
}

function test2(num) { // 是纯函数，函数的输出取决于输入
  console.log(num)
}

// 副作用
let arr1 = ['a', 'b', 'c', 'd', 'e'],
    arr2 = ['a', 'b', 'c', 'd', 'e']

let spArr = arr1.splice(0, 3), // 存在副作用, splice 会修改原数组
    slArr = arr2.slice(0, 3) // 无副作用

console.log(arr1, spArr)
console.log(arr2, slArr)


// 纯函数可缓存性
function cacheFn(fn) {
  let cache = {}

  return function () {
    // arguments 是实参列表
    let args = JSON.stringify(arguments) // 对象的key是字符串，所以进行转换
    cache[args] =  cache[args] ? cache[args] + '(来自缓存池)' : fn(arguments)

    // console.log(arguments)
    return cache[args]
  }

}

let addT = cacheFn(function (arguments) {
  // 此处的arguments不是实参列表 是 参数 该参数有第105行传递
  let argLen = arguments.length,
      item,
      res = 0
  for (let i = 0; i < argLen; i++) {
    item = arguments[i]
    res += item
  }
  return res
})

console.log(addT(1, 2))
console.log(addT(1, 2))

