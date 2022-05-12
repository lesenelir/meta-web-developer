let arr1 = [1, 2, 3, 4]

let arr2 = arr1

// 重新赋值，不能在原来的堆内存中该，而是重新声明了一个arr1，所以不会影响arr2
arr1 = [1, 2]


console.log(arr2) // [ 1, 2, 3, 4 ]

// Note: 此处的arr2 不会跟着arr1改变，因为 arr1 = [1, 2] 是重新赋值
