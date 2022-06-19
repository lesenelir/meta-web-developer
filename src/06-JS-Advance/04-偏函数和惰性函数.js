/**
 *  函数的元 = 函数参数的个数
 *  有两个参数的函数 = 二元函数
 *
 *  偏函数 partial Application -> 部分应用
 *
 *  偏函数是部分应用、局部应用，指固定一个函数的一些参数，然后产生另一个更小元的函数
 *
 *  偏函数是要先传入一些参数，其余的参数再传
 *
 *  柯里化：
 *    将一个多参数的函数转换成多个单参数的函数
 *    将n元函数转换成n个一元函数
 *
 *  偏函数：
 *    固定一个函数的一个或多个参数
 *    将n元函数转换成n-x元的函数
 *
 *  惰性函数
 *    函数内部改变自身的机制
 *    - 定义：惰性加载表示函数执行的分支只会在函数第一次调用的时候执行，
 *           在第一次调用的过程中，该函数覆盖为另一个按照合适的方式执行的函数
 *           这样任何对原函数的调用就不用再经过执行的分支了
 *    - 好处：可以在第一次执行的时候改变自身的函数 - 功能体多样化
 *
 */

function add(a, b, c, d) {
  return a + b + c + d
}

// let newFn = curry(add) // 柯里化
// newFn(1)(2)(3) // 柯里化的最想要的表达

// let newFn = partial(add, 1)  // 偏函数，固定了一个参数
// newFn(2,3)

let newAdd = add.bind(null, 1, 2)
console.log(newAdd(3, 4))

Function.prototype.partial = function () {
  let _self = this, // add
      _args = [].slice.call(arguments) // 把类数组转换成新数组

  return function () {
    let newArgs = _args.concat([].slice.call(arguments)) // 返回函数的参数合并上一层函数
    return _self.apply(this, newArgs) // 存放数组立即执行用apply
  }
}

let newAdd2 = add.partial(1, 2)
console.log(newAdd2(3, 4))


// 惰性函数
let timeStamp = null
function getTimeStamp() {
  if (timeStamp) {
    return timeStamp
  }
  timeStamp = new Date().getTime()
  return timeStamp
}

console.log(getTimeStamp())
console.log(getTimeStamp())
console.log(getTimeStamp())
console.log(getTimeStamp())

// 惰性加载
let getTimeStamp2 = function () {
  let timeStamp = new Date().getTime()

  getTimeStamp2 = function () {
    return timeStamp
  }
  return getTimeStamp2()
}
console.log(getTimeStamp2())
console.log(getTimeStamp2())
console.log(getTimeStamp2())



