// 立即执行函数， 执行完以后立即执行 IIFE
// 初始化函数
// 特点： 1. 自动执行 2. 执行完后立即销毁

// 立即执行函数 写法1
// (function () {
//
// })()

// - 【注】：此方法不能用箭头函数
let num = (function (a, b) {
  return a + b
}(1, 2)) // W3C建议

console.log(num)

// 立即执行函数可以传参 、 可以有返回值
;(() => {
  console.log(1 + 2)
})()
// Note: 箭头函数的立即执行函数 传参括号要放在外面，不能按照W3C来

// 报错
/*
function test() {
  console.log(1)
}()
*/

let test0 = function () {
  console.log(1)
}()

// Note : 小括号可以把函数声明语句变成表达式，表达式可以立即执行

// 立即执行函数 经典题
function test() {
  var arr = []
  var i = 0
  for (; i < 5; i++) {
    arr[i] = function () {
      console.log(i)
    }
  }
  return arr // arr 中保存的是匿名函数，此时return 函数，形成了闭包，return的时候，i已经循环到10
}

let myArr = test()
for (let i = 0; i < 5; i++) {
  myArr[i]() // 输出: 5个5 ，
}


function test2() {
  var arr = []

  for (var i = 0; i < 5; i++) {
    (function (j) {
      arr[j] = function () {
        console.log(j)
      }
    })(i)
  }
  return arr
}

var myArr2 = test2()
for (let i = 0; i < 5; i++) {
  myArr2[i]()
}

// 总结： 不用let的方法： 用立即执行函数来做，把i作为参数传递给立即执行函数
console.log("=======================")

let x = (1, 2)
console.log(x) // 2
// 逗号是运算符，只返回最后的位数

console.log(typeof sssss)
