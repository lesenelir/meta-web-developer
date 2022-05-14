// Array.prototype.concat(数组名)


// Array.prototype.toString()
// 将数组中的元素转换为字符串 - 并用 ','隔开
let arr1 = ['a', 'b', 'c', 1, 2, 3]
let str1 = arr1.toString()
console.log(str1 + ' - ' + typeof str1) // a,b,c,1,2,3 - string

// Array.prototype.slice()
// 新建一个数组
let arr2 = [1, 2, 3, 4]
let temp = arr2.slice(1, 3) // 左闭右开
console.log(arr2) // 原数组不改变
console.log(temp)

// Array.prototype.join()


// 去重 方法可以用一个obj 或者 map 进行存储数组的item
let t = [0, 0, 1, 1, 2, 3, 3, 4, 'a', 'a', 'b']

Array.prototype.unique = function () {
  let map = new Map()
  let res = []
  for (let i = 0; i < this.length; i++) {
    // 使用obj 会在 !obj[i]出现0的问题
    if (!map.has(this[i])) {
      map.set(this[i], this[i])
      res.push(this[i])
    }
  }
  return res
}

console.log(t.unique())

// Note： 去重复的方法是用map来存储原来数组的内容
