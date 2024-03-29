function deepSum(arr) {
	if (arr.length < 1) {
		// return 'No number'
		return 0
	}
	var sum = 0
	// for (var i = 0; i < arr.length; i++) {
	//     for (var j = 0; j < arr[i].length; j++) {
	//         for (var k = 0; k < arr[i][j].length; k++) {
	//             sum += arr[i][j][k]
	//         }
	//     }
	// }
	// REKURSIF
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length !== undefined) {
			sum += deepSum(arr[i])
		} else {
			sum += arr[i]
		}
	}
	return sum
}

//TEST CASE
console.log(
	deepSum([
		[[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
		[[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
		[[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]]
	])
) // 316

console.log(
	deepSum([
		[[20, 10], [15], [1, 1]],
		[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
		[[3, 5, 1], [1, 5, 3], [1]],
		[[2]]
	])
) // 156

console.log(deepSum([])) // No number

// console.log(deepSum([ => the function doesn't work if the array depth not always 3
//     [
//         [3, 2],
//         2,
//         [1, 7]
//     ],
//     [
//         12
//     ],
//     [
//         [3, 1]
//     ],
//     [
//         4, 1
//     ],
//     5
// ]))
