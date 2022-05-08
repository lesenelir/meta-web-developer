// 1. 闭包实现累加器
function add() {
  let num = 1

  function fn() {
    console.log(++num)
  }
  return fn
}

let res = add()
res()
res()
res()


// 2. 闭包的缓存机制
// 闭包实现打印学生名单
function classroom(name) {
  let stuArr = []

  let obj = {
    add(name) {
      stuArr.push(name)
      console.log(stuArr)
    },
    delete(name) {
      let res = stuArr.filter((item) => {
        return item !== name
      })
      console.log(res)
    }
  }

  return obj // 返回一个对象 形成闭包
}

// 通过用函数去封装数据、操作数据的方法，返回给外界使用

const student1 = classroom()
student1.add('l1')
student1.add('l2')
student1.add('l3')
student1.delete('l1')

// Note： 闭包的应用场景： 防抖、设置私有变量、单例模式

