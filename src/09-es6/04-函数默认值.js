/*
var x = 1
{
  let x = x // 报错 let 重新声明x  - 暂时性死区 TDZ(Temporal Dead Zone)
  console.log(x)
}
*/

// falsy 虚值
function foo(x, y) {
  // || 是找真，如果为假 则会往右边继续找
  x = x || 1
  y = y || 2
  console.log(x + y)
}
foo() // 3
foo(5, 6) // 11
foo(5) // 7
foo(null, 6) // 7 - 传入null假，由于|| 是找真，所以会退格
foo(0, 5) // 6  - 此时x不是传入的0，而是1，因为0是假

// es6：函数默认值
function foo2(x = 1, y = 2) {
  // es5 默认值取法
  // let a = typeof (arguments[0]) !== 'undefined' ? arguments[0] : 1
  console.log(x + y)
}

// 参数传入的值都是重新计算的值 - 惰性求值
let a = 1
function foo3(b = a + 1) {
  console.log(b)
}
foo3()
a = 100
foo3()






