// 包装类
// 基本数据类型 没有自己的方法和属性

let a = 1
console.log(a)

// 通过包装类，把整形数字a设置为对象 赋值给变量b
let b = new Number(a)
console.log(typeof b) // object
b.name = 'bName'
b.say = function () {
  console.log('b对象的方法')
}
console.log(b) // [Number: 1] { name: 'bName', say: [Function (anonymous)] }

let num1 = b + 2
console.log(num1) // 3

// Note: 包装类和原有值参与运算，会返回原始值

/**
 *  系统内置的包装有三种：
 *    1. new Number
 *    2. new String
 *    3. new Boolean
 */

let test = new Number(undefined)
console.log(test) // [Number: NaN]


console.log("===============================================")

let str = 'abc'
// new String(str).length  length是系统内置的一个属性
console.log(typeof new String()) // object
console.log(new String(str))
// Note: 字符串没有length属性，但是字符串中间经过了一层包装类，包装类中有length属性


console.log("===============================================")

// 通过修改数组的长度，去截断数组
let arr = [1, 2, 5, 3, 4]
arr.length = 2
console.log(arr) // [ 1, 2 ]

// 但是不可以通过修改字符串的
let str1 = 'abc'
// str1.length = 1  // 报错

// 引用类型才可以修改length ； 基本数据类型（string）不可以修改length， 会经过一层包装类的
// 【实质】： 基本数据类型访问属性，会经过一层包装类，即，默认先new 包装类，然后访问



let name = 'lee'
let type = typeof name // string
console.log(type)
if (type.length === 6) {
  // type.text = 'string'
  console.log('1')
}
console.log(type.text) // undefined


