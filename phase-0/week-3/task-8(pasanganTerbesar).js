function pasanganTerbesar(num) {
	var highest = 0
	var numParsed = String(num)
	for (var i = 0; i < numParsed.length; i++) {
		// console.log(numParsed.slice(i, i + 2))
		if (numParsed.slice(i, i + 2) > highest) {
			highest = numParsed.slice(i, i + 2)
		}
	}
	return Number(highest) // just in case it ought to be a number, not a string
}

// TEST CASES
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99

//   console.log(pasanganTerbesar(1232321431));
