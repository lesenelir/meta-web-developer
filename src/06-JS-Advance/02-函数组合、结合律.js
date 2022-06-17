/**
 *
 *  函数组合 = 饲养函数 compose
 *    - 选择几个函数组合成一个新函数解决这几个函数的所有问题
 *    - 若干个纯函数、偏函数、柯里化函数组合成一个新的函数、形成数据传递、并实现一种有序的执行效果
 *
 *  结合律 Associativity
 *    - 组合函数的参数中再进行组合，最终得到的结果不会影响
 *
 *  pointfree
 *    - Love means never having to say you're sorry
 *    - Pointfree style means never having to say your data
 *
 *
 */

function toUpperCase(str) {
  return str.toUpperCase()
}

function exclaim(str) {
  return str + '!'
}

console.log(toUpperCase(exclaim('alj'))) // 不进行组合函数的写法

// 组合函数的写法
// 组合函数的新函数的参数值都是函数
function compose1(f, g) { // 函数的参数是两个函数
  return function (x) {
    return f(g(x)) // 自右向左执行 - 左倾
    // x是f g 之间的"管道"传输值
  }
}

let f = compose1(exclaim, toUpperCase) // 从右向左生成一个数据结果的【生产线】
console.log(f('hello'))


function reverse(str) {
  return str.split('').reverse().join('')
}

// 函数组合不确定参数个数的写法
function compose2() { // 此处也可以用剩余参数...args来代替
  // 将类数组（obj）形成一个数组的方法
  let args = Array.prototype.slice.call(arguments),
      len = args.length - 1
  return function (x) {
    // return f(g(x))
    let res = args[len](x)
    while (len--) {
      res = args[len](res)
    }
    return res
  }
}

let f2 = compose2(exclaim, toUpperCase, reverse)
console.log(f2('Hello'))

// 组合函数不确定参数的reduceRight版本
function compose3(...args) {
  return function (x) {
    return args.reduceRight((pre, callback) => {
      return callback(pre) //reduce中的return返回是给pre
    }, x)
  }
}

let f3 = compose3(exclaim, toUpperCase, reverse)
console.log(f3('Hello'))


// 结合律
function compose4(...args) {
  return function (x) {
    return args.reduceRight((pre, callback) => {
      return callback(pre) //reduce中的return返回是给pre
    }, x)
  }
}

// 结合律用多重调用
// 组合函数的任意分组不会影响组合函数的值
let f4 = compose4(compose4(exclaim, toUpperCase), reverse)
console.log(f4('Hello'))


// pointfree
// 永远都不需要知道你要处理的数据是谁 -> 对于组合函数而言
