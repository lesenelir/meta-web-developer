let arr = [1, 2, 3]
// 参数是arguments 类数组
//

// 实现原生push
Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this.length
}

arr.splice(1, 0, 99)
console.log(arr) // 从索引1的位置开始
arr.splice(-1, 0, 88)
console.log(arr) // 从后面开始数-1的位置


// sort()
// sort 是按照ASCII码排序
// sort(function() {})  参数a, b
// 返回值， 负值 a在前面；正值 b在前面

// 随机排序
arr.sort((a, b) => {
  // let rand = Math.random() // (0,1)区间的数
  //  if (rand - 0.5 > 0) {
  //    return 1
  //  } else {
  //    return -1
  //  }
  return Math.random() - 0.5
})
console.log(arr)


let objArr = [
  {name: 'l1', age: 23},
  {name: 'l2', age: 77},
  {name: 'l3', age: 18},
  {name: 'l3', age: 29}
]

objArr.sort((a, b) => {
  // if (a.age > b.age) {
  //   return 1
  // } else {
  //   return -1
  // }
  return a.age - b.age
})
console.log(objArr)


//  使用splice方法重写数组原型上的unshift()方法
Array.prototype.myUnshift = function () {
  // 类数组转数组的方法
  // let argArr = Array.prototype.slice.call(arguments)
  // 开头新增数组中前一个方法
  let pos = 0
  for (let i = 0; i < arguments.length; i++) {
    this.splice(pos, 0, arguments[i])
    pos++
  }
  return this.length
}

