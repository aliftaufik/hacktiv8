function findDelta(arr) {
  var pos = []

  findpos: for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '*') {
        pos.push([i, j])
      }
      if (pos.length === 2) {
        break findpos
      }
    }
  }

  if (pos.length !== 2) {
    return 'Jarak tidak ditemukan'
  }

  var result = 0

  if (pos[0][0] >= pos[1][0]) {
    result += pos[0][0] - pos[1][0]
  } else {
    result += pos[1][0] - pos[0][0]
  }

  if (pos[0][1] >= pos[1][1]) {
    result += pos[0][1] - pos[1][1]
  } else {
    result += pos[1][1] - pos[0][1]
  }

  return result
}

var arr1 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ']
]
console.log(findDelta(arr1)) // 3

var arr2 = [
  [' ', ' ', ' ', ' ', '*'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ']
]
console.log(findDelta(arr2)) // 5

var arr3 = [
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', '*', ' ', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ']
]
console.log(findDelta(arr3)) // Jarak tidak ditemukan
