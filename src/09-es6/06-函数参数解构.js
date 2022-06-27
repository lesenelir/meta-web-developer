/**
 *  函数参数的声明本质是定义了一个变量
 *  函数参数的声明参数内不能+()
 *
 *  () 可以把语句转换为表达式
 *
 *  解构赋值的本质：
 *    - 通过模式匹配的方式 给变量赋值
 *
 *
 *  函数参数解构：
 *    - 函数参数有实参和形参相统一的过程（赋值）
 *    - 解构赋值也是一种赋值操作
 *    - 可以对函数参数进行解构
 *
 *
 */

// 数组本质也是一种对象，可以用对象的方式来进行匹配
let arr = [1, 2, 3]
let {0: first, [arr.length - 1]: last} = arr
console.log(first, last)


// 解构方式对函数参数赋值
function test1([x, y]) {
  console.log(x, y)
}

test1([1, 2]) // 1 2
test1([1]) // 1 undefined
// test1() // 报错 - 必须传入一个数组
test1([]) // undefined undefined


// 对象作为函数的参数
// 函数的参数是以对象的方式来进行解构 ---> 函数参数要传入对象
function test2({x, y}) {
  console.log(x, y)
}

test2({x: 1, y: 2}) // 1 2
test2({y: 2, x: 1}) // 1 2
test2({x: 1}) // 1 undefined


// 解构隐式转换
// 字符串是类数组（对象）
const [a, b , c, d, e] = 'hello'
console.log(a, b, c, d, e)

const {length: len} = 'hello'
console.log(len)


// Number有对应的包装类， --> 包装类是一个对象 - 该对象原型上有toString方法
let {toString: fn} = 123
console.log(fn)
console.log(fn === Number.prototype.toString) // true

// Note: undefined 和 null 不能进行隐式转换，因为没有包装类

