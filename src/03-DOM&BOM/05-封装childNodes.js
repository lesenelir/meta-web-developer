// 封装childNodes 识别自元素为元素方法

function elemChildren(node) {
  let arr = [],
      children = node.childNodes
  for (let i = 0; i < children.length; i++) {
    let childItem = children[i]
    if (childItem.nodeType === 1) { // 元素节点
      arr.push(childItem)
    }
  }
  return arr
}

// 类数组写法
function elemChildren2(node) {
  let temp = {
    length: 0,
    push: Array.prototype.push,
    splice: Array.prototype.splice
  }
  let len = node.childNodes.length
  for (let i = 0; i < len; i++) {
    let childItem = node.childNodes[i]
    if (childItem.nodeType === 1) { // 元素节点
      temp[temp[length]] = childItem
      temp[length]++
    }
  }
  return temp
}

