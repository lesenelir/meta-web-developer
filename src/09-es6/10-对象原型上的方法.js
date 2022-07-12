
// is 函数
console.log(NaN === NaN) // false
console.log(+0 === -0) // true

console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false


// Object.assign(target, ...source)  合并对象
// ES6之前把对象进行遍历，把得到的值进行组合

let obj1 = {a: 1}
let tar1 = {b: 2}

let res1 = Object.assign(tar1, obj1) // 把obj1中的属性合并到tar1对象中，并返回tar
console.log(res1)
console.log(tar1)
console.log(res1 === tar1) // true
// Note: 由于返回的值就是tar，所以Object.assign一般不写返回值
// Object.assign source属性，后面的属性会覆盖前面相同的属性




