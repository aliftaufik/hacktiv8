function reverseAll(arr) {
  var result = []
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i] = String(arr[i])
    var temp = ''
    for (var j = arr[i].length - 1; j >= 0; j--) {
      temp += arr[i][j]
    }
    result.push(temp)
  }
  return result
}

console.log(reverseAll([123, 521, 456])) //[654,125,321]
console.log(reverseAll([897])) //[798]
console.log(reverseAll([])) //[]
