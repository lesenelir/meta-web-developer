console.log(null == undefined)
console.log(null === undefined)

// NaN 是数字类型，但不代表任何的值 所以相等会为false
// NaN 与包括自己在哪的任何东西都不相等
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(NaN != NaN) // true
console.log(NaN !== NaN) // true

console.log('111' == "111")
console.log([] === [])
console.log([] == [])
console.log([] == ![]) // true


console.log(isNaN('10'))
console.log(parseInt('123a') == 123) // parseInt 会从开始看找到"非数"为止

console.log({} == {}) // false


console.log(0 / 0) // NaN  非数
// NaN是数字类型，但不代表任何值

console.log(1 / 0) // Infinity


// undefined null NaN 0 "" false 全都是假，其他都是真

