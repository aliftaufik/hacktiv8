function countStar(stars) {
	var total = 0
	for (var i = 0; i < stars.length; i++) {
		var counter = 0
		for (var j = 0; j < stars[i].length; j++) {
			if (stars[i][j] === '*') {
				counter++
			}
		}
		total += counter
	}
	var avg = total / stars.length
	return String(avg).length > 4 ? Number(String(avg).slice(0, 4)) : avg
}

console.log(
	countStar([
		['*', '*', '*', ' ', ' '],
		['*', '*', '*', '*', ' '],
		['*', '*', '*', ' ', ' '],
		['*', '*', '*', '*', '*'],
		['*', '*', ' ', ' ', ' '],
		['*', '*', '*', ' ', ' '],
		['*', '*', '*', '*', ' '],
		['*', '*', ' ', ' ', ' '],
		['*', '*', '*', ' ', ' '],
		['*', '*', ' ', ' ', ' '],
		['*', '*', '*', '*', '*'],
		['*', '*', '*', '*', ' ']
	])
)
// 3.33

console.log(
	countStar([
		['*', '*', '*', '*', ' '],
		['*', '*', '*', '*', '*'],
		['*', '*', '*', ' ', ' '],
		['*', '*', '*', '*', '*'],
		['*', '*', '*', '*', ' '],
		['*', '*', '*', '*', '*'],
		['*', '*', '*', ' ', ' '],
		['*', '*', '*', '*', ' '],
		['*', '*', '*', '*', '*']
	])
)
// 4.22
