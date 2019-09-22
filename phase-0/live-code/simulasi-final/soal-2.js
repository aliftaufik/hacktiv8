function sortPlaylist(playlist) {
	var arr = []
	for (var i = 0; i < playlist.length; i++) {
		for (var j = 0; j <= arr.length; j++) {
			if (arr[j] === undefined) {
				arr.push([playlist[i], 1])
				break
			} else if (arr[j][0] === playlist[i]) {
				arr[j][1]++
				break
			}
		}
	}
	var sorted = true
	while (sorted) {
		sorted = false
		for (var i = 1; i < arr.length; i++) {
			if (arr[i - 1][1] > arr[i][1]) {
				var temp = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = temp
				sorted = true
			}
		}
	}
	var result = []
	for (var i = 0; i < arr.length; i++) {
		result.push(arr[i][0])
	}
	return result
}

console.log(
	sortPlaylist([
		'Senorita',
		'Senorita',
		'I Love You 3000',
		'A Whole New World',
		'Senorita',
		'I Love You 3000',
		'Senorita'
	])
)
// [ 'A Whole New World', 'I Love You 3000', 'Senorita' ]

console.log(
	sortPlaylist([
		'Donna Donna',
		'Top of The World',
		'Donna Donna',
		'Top of The World',
		'Top of The World',
		'Location Unknown'
	])
)
// [ 'Location Unknown', 'Donna Donna', 'Top of The World' ]

console.log(sortPlaylist([])) // []
