console.log(typeof [])
console.log(typeof {})

function fn() {

}

console.log(typeof fn) // function
// Note: 引用数据类型 typeof 返回object 除了有一个特例是function

console.log(typeof(1 - "1")) // number
console.log(typeof("1" - "1")) // number
// Note: 隐式类型转换

// console.log(a) // 报错
// console.log(typeof(a)) // undefined
// console.log(typeof(typeof(a))) // string


console.log("=====================================")
/**
 * 显示类型转换和隐式类型转换
 */
// 显示类型转换
let a = '1a'
console.log(Number(a) + "-" + typeof(Number(a))) // NaN-number


// parseInt(变量名, 进制数) 转换为整形
let b = 11001
console.log(parseInt(b, 2)) // 以某一进制数转为10进制数取值


console.log(parseInt('abc123')) // NaN
console.log(parseInt('123abc')) // 123
console.log(parseInt('1abc23')) // 1

// Note: parseInt 会从第一位数字开始看，如果第一位都不是数字的话就返回NaN
//       如果第一位是数字，则返回不是数字的位数为止


// parseFloat()

console.log(parseFloat('3.1415926').toFixed(2))
// toFixed 是四舍五入 保留小数点位数


console.log(typeof(String(123)))
console.log(typeof(123 + ''))


console.log(Boolean(1)) // true
console.log(Boolean('123')) // true
console.log(Boolean(null)) // false - null undefined '' 0 false NaN


console.log("-------------------------------")
// 隐式类型转换
let x = '123'
x++
console.log(x) // 124

let y = '3' * 2
console.log(y) // 6

let num = '123'
console.log(typeof +num) // number

// isNaN()方法
// NaN是非数
console.log(typeof NaN) // number
console.log(isNaN(NaN)) // true
console.log(isNaN('123')) // false - 会经过隐式转换为数字
console.log(isNaN('a')) // true
console.log(isNaN(null)) // false - 会转换为0
console.log(isNaN(undefined)) // true

console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN


console.log(+[]) // 0


console.log({} + 'b' > {} + 'a') // true


