/**
 *  高阶函数
 *    - 定义：函数的参数有函数，则该函数是高阶函数
 *    - 一个函数接收另一个函数作为参数变量的这个函数就是高阶函数
 *
 *  高阶函数举例
 *    - 带有回调函数的函数都是高阶函数
 *    - 数组的扩展方法
 *    - 计时器
 *    - sort 、 replace
 *
 *  高阶函数的好处
 *    - 便于扩展、抽象
 *    - 可以作为一个方法执行完毕的回调程序 app.use NodeExpress框架
 *
 */
function test(a, b, fn) {
  return fn(a, 2) + fn(b, 2)
}

function pow(x, n) {
  return Math.pow(x, n)
}

console.log(test(2, 3, pow)) // 2*2+3*3 = 13


// JS函数实际上都是指向某一个变量 (变量可以指向一个函数)
// let test = function(){}
// function test(){}
// 函数参数可以接收一个变量， 所以=> 函数的参数可以接收另一个函数作为变量

let arr = [1, 2, 3, 4, 5]
let newArr = arr.map((item) => { // map不改变原数组
  return item + 1
})
console.log(newArr)
// map函数 -> 数据处理函数 -> 高阶函数
// reduce函数 -> 归纳函数 -> 高阶函数


// 抽象 -> 抽象成完全独立的函数体
// 相互依赖的程序体


/**
 *  函数式编程思想：柯里化
 *    - 返回新的函数，直到把参数凑齐
 *
 *  柯里化优势：
 *    - 简化代码
 *    - 提高维护性
 *    - 功能单一化、功能内聚、降低耦合、降低代码的重复性
 *
 */

// 固定参数
// function test1(a, b, c) {
//   return a + b + c
// }
//
// test1(1, 2, 3)
// test1(1)(2)(3)
// test1(1, 2)(3)
// test1(1)(2, 3)

function add(a, b, c, d) {
  return a + b + c + d
}

add(1, 2, 3, 4)

function curry(fn) {
  let _arg = Array.prototype.slice.call(arguments, 1) // 从第一位开始截
  return function () {
    let newArgs = _arg.concat(Array.prototype.slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

let add2 = curry(add, 1, 2) // 此处的参数可以取1～4任意一个
let res = add2(3, 4)
console.log(res)



// 封装Ajax 柯里化

function ajaxRequest(opt, data, sCB, eCB) {
  $.ajax({
    url: opt.url,
    type: opt.type,
    dataType: opt.dataType,
    data: data,
    success: sCB,
    error: eCB
  })
}




