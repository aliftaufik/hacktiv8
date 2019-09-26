function countCharRecursive(sentence, letter) {
	if (!sentence[0]) {
		return 0
	}
	var totalChar = 0
	var word = sentence[0]
	for (var i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			totalChar++
		}
	}
	return totalChar + countCharRecursive(sentence.slice(1), letter)
}

console.log(
	countCharRecursive(
		[
			'90125785123545',
			'balonku ada 5',
			'1 tahun ada 52 minggu',
			'35-infinite-fox'
		],
		'5'
	)
) // 7
console.log(
	countCharRecursive(['Old', 'MacDonald', 'had', 'four', 'farms'], 'o')
) // 2
console.log(
	countCharRecursive(['Anchor', 'classic', 'daring', 'eager', 'fearless'], 'a')
) // 4
console.log(countCharRecursive(['haha', 'haha', 'haha', 'haha', 'haha'], 'h')) // 10
console.log(countCharRecursive([], 'z')) // 0
