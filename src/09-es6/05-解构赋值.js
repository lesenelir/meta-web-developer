/**
 *  解构赋值
 *    - 作用：变量赋值
 *    - 匹配规则：模式匹配，结构化赋值
 *
 */

// 完全解构
let [a, b, c] = [1, null, 's']
console.log(a, b, c)


let [d, [e]] = [1, [2]]
console.log(d, e)

// 解构失败
// 1. 变量多了 , 多出的变量值是undefined
let [x, y, z] = [1, 3]
console.log(x, y, z)

// 2. 不完全解构
// 不完全解构是值多了
let [m, n]= [9, 8, 7]
console.log(m, n)


// 解构的默认值
// 解构可以给默认值
// 模式匹配： 右边有值则匹配值，没有值才会匹配默认值
let [a1 = 4] = [] // 如果右边为空数组，则表示没有可以赋值的内容
console.log(a1) // 4
let [b1 = 4] = [1]
console.log(b1) // 1

// 函数没有手动返回值，则默认返回一个undefined
function test() {
  console.log(10)
}

let [x1 = test()] = []
console.log(x1) // 10 undefined


let [x2 = 1, y2 = x2] = [1, 2]
console.log(x2, y2) // 1 2

// 报错 - 存在暂时性死区
// 先定义了x3变量，再使用了y3变量，此时y3变量还没有定义，所以存在暂时性死区
// let [x3 = y3, y3 = 1] = []
// console.log(x3, y3)


console.log("======================")

// 对象的解构

// 创建对象的方式
let obj1 = {}
let obj2 = new Object()
let obj3 = Object.create(null) // null 是指定原型

// 对象的增强
// es6 对象写法：
//    1. 属性名和属性值相同则属性值可以省略
//    2. 对象中的方法可以简写如下的方法
//    3. 对象中的属性名可以用[] 来进行拼接
let name = 'lesenelir',
    age = 18,
    engName = 'Lesenelir Zhou'
let person = {
  name,
  age,
  eat() {
    console.log('eating')
  },
  ['eng' + 'Name']: engName
}
console.log(person)


// 对象的解构
//  - 对象变量的赋值
//  - 对象的解构是按照属性名来解构的  ==>  =左边是变量名，右边是属性名, 变量名和属性名要相等
//  - 对象解构是按照变量名和属性名来判断的，和顺序无关

// =左边定义解构的变量： => 属性名: 重新定义的变量名
let {q: qNum, w: w, s: s} = {q: 1, w: 2, s: 3}
console.log(qNum, w, s)

let {q1, w1, s1} = {q1: 1, w1: 2, s1: 3}
console.log(q1, w1, s1)


// 不完全解构，值多了
// 不完全解构的默认值
// 解构的失败的变量值是undefined
let {q2 = 66, w2, s2, g2} = {w2: 2, s2: 3, f: 5}
console.log(q2, w2, s2, g2)


// 对象解构嵌套
let p = {
  name: 'l1',
  son: {
    name: 'l2',
    son: {
      name: 'l3'
    }
  }
}

// {属性名: 解构的变量名}
let {son: {son: sonV}} = p
console.log(sonV)
console.log(sonV.name)


// Note： ES6 模块化 导入导出中{xxx} 就是用到了对象的解构

// Note:
//   - 数组的解构赋值是按照下标位置来解构赋值
//   - 对象的解构赋值是按照对象的属性来解构赋值





