// undefined null NaN 0 "" false 全都是假，其他都是真

console.log(1 && 2) // 2
console.log(1 || 2) // 1

// 如果是&& ，遇到真就往后走，遇假就返回，或者返回最后一个真的值
// && 有假就返回假 ， 没有假就返回最后一个真的值

// 如果是|| ，遇到假就往后走，如果遇到真 或者走到最后了，就返回当前的值
// || 有真就返回真，没有真，就返回最后一个假的值

console.log(1 && undefined && 2 && null) // undefined
console.log(1 || undefined || 2 || null) // 1

// Note： && 找假 ； || 找真

