function konversiMenit(menit) {
	// you can only write your code here!
	var jam = Math.floor(menit / 60) // Pake Math.floor() biar angka detiknya nggak berkurang, dan agar jamnya ngga nambah.
	var menit = menit % 60
	if (menit.toString().length == 1) {
		//diubah k string, biar punya length. Buat ngecek, klo length cuman satu tambahin 0 dawal
		menit = '0' + menit
	}

	return jam + ':' + menit
}

// TEST CASES
console.log(konversiMenit(63)) // 1:03
console.log(konversiMenit(124)) // 2:04
console.log(konversiMenit(53)) // 0:53
console.log(konversiMenit(88)) // 1:28
console.log(konversiMenit(120)) // 2:00
