/**
 *  kiss原则： keep it simple,stupid
 *
 *  let 块级作用域 - 解决变量污染的问题
 *  {
 *    xxx
 *  }
 *
 *  let:
 *    1. let在同一作用域下不可重复声明
 *    2. let的变量不会提升，会产生一个暂时性死区（即，不能在let声明语句前使用let声明的变量）
 *    3. let只能在当前的块级作用域下生效
 *    - 本质： let本质就是为js增加了一个块级作用域
 *
 *  Note： 块级作用域中建议使用函数表达式声明函数，而不是用直接使用函数声明
 *
 */
var a = 1
var a = 2
console.log(a) // var 变量名相同 可进行覆盖 (允许重复声明)


// function test(i) {
//   let i = 1   // 报错，i被重复定义了，预编译的时，定义参数i的值为undefined
//   console.log(1)
// }
// test()

// console.log(b) // 报错，let会暂时性死区
// let b = 1

var c = c
console.log(c) // undefined

// let d = d
// console.log(d) // 报错  - 声明d时使用d，此时产生一个暂时性死区

var arr = []
for (var i = 0; i < 10; i++) {
  arr[i] = function () {
    console.log(i)
  }
}
for (var i = 0; i < 10; i++) { // 0 - 9 - 原因：此时i被重新赋值
  arr[i]()
}
for (var k = 0; k < 10; k++) { // 10 个 10
  arr[k]()
}


console.log("===========")

for (let i = 0; i < 10; i++) { // 10个a - 原因：for()和{}是两个块级作用域
  let i = 'a'
  // var i = 'a' // 报错 - 原因： var会提升a，覆盖let i = 0 这条声明的变量a
  console.log(i)
}


// 不建议在块级作用域当中使用函数声明的方式来声明函数
//                而是使用函数表达式的方式来声明函数
if (true) {
  let test = function () { // 函数表达式
    console.log('test')
  }
}



