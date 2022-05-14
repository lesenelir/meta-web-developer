// 拷贝、复制、克隆，引用类型中保存堆内存中的地址

let person1 = {
  name: '张三',
  age: 18,
  gender: 'male',
  son: {
    firstName: 'lee',
    lastName: 'jone'
  }
}
console.log(person1)

// 方法1.  -  浅拷贝 （并不能处理引用类型的值,person2改，person1也改）
let person2 = {}
for (const key in person1) {
  person2[key] = person1[key]
}
person2.name = '李四'
console.log(person2)

// 浅拷贝方法
function clone(origin, target) {
  let tar = target || {}
  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      tar[key] = origin[key]
    }
  }
  return tar
}

console.log("===========================================")

// 方法2.  - 浅拷贝
let person3 = Object.assign({}, person1) // 不能拷贝多层
person3.name = '王五'
console.log(person3)

console.log("===========================================")




