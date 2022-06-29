function foo5() {
  console.log(5)
}

function foo6() {
  console.log(6)
}

function foo7() {
  console.log(7)
}

let x = 4

const objRoot = {
  x,
  foo5,
  foo6,
  foo7
}

// console.log(obj)

// node环境的commonjs 模块化语句
// 此时的module.exports是一个对象
module.exports.objRoot = objRoot
