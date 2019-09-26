function slice(data, start, end) {
	if (start >= end || start >= data.length || data.length === 0) {
		return []
	}
	if (!start) {
		start = 0
	}
	if (!end) {
		end = data.length
	}
	var result = []
	for (var i = start; i < end; i++) {
		result.push(data[i])
	}
	return result
}

//DRIVER CODE

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])) //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)) //[]
