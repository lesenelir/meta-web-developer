
let arr = [1,2,3,4,['a', 'b', 'c'], 5, [[['d', ['e', 'f']], {}, null, undefined]], [null, [{}, '6']]]

function flatten1(arr) {
  let _arr = arr || [],
      res = [],
      len = _arr.length,
      item

  for (let i = 0; i < len; i++) {
    item = _arr[i]
    if (isArr(item)) {
      // 是数组，则递归处理
      res = res.concat(flatten1(arr))
    } else {
      res.push(item)
    }

  }
  return res

  function isArr(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }

}


Array.prototype.flatten2 = function () {
  let _arr = this,
      toStr = {}.toString

  if (toStr.call(_arr) !== '[object Array]') {
    throw new Error('只有数组类型的数据可以使用flatten2方法')
  }

  let res = []

  _arr.forEach((item) => {
    toStr.call(item) === '[object Array]'
                      ? res = res.concat(item.flatten2())
                      : res.push(item)
  })
  return res
}



Array.prototype.flatten3 = function () {
  let _arr = this,
      toStr = {}.toString

  if (toStr.call(_arr) !== '[object Array]') {
    throw new Error('只有数组类型的数据可以使用flatten2方法')
  }

  return _arr.reduce((pre, item) => {
    return pre.concat(
        toStr.call(item) === '[object Array]'
                                ? item.flatten3()
                                : item
    )
  }, [])

}

