/**
 *
 *  const:
 *    1. 定义常量必须赋值，定义后不能更改
 *    2. const 也存在暂时性死区问题，不能在定义之前使用定义的变量
 *    3. const 存放引用类型时 保存的内存地址，只需要保存内存地址不变即可
 *
 *  顶层对象
 *    window
 *    global
 *    如果没有声明变量直接赋值，则把该变量作为顶层对象的属性来存储
 *
 */

const a = 1
console.log(a)

const obj = {
  name: 'lesenelir',
  age: 18
}

obj.age = 20

console.log(obj) // const 变量对于引用类型而言，只保存地址，地址内的值修改是可以的


// 对象冻结
const obj2 = {}
obj2.name = 'lesenelir'
Object.freeze(obj2)   // 冻结对象
obj2['age'] = 20 // 这条语句不起作用

console.log(obj2)

// 对象属性遍历冻结 - 把对象中的属性是对象的value也进行冻结
function myFreeze(obj) {
  Object.freeze(obj)
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.freeze(obj[key])
    }
  }
}

// 顶层对象
b = 2
console.log(b)
console.log(global.b)

