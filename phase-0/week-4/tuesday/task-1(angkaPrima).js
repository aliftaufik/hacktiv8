function angkaPrima(angka) {
	// if ((angka % 2 === 0 && angka !== 2)
	//     || (angka % 3 === 0 && angka !== 3)
	//     || (angka % 5 === 0 && angka !== 5)
	//     || (angka % 7 === 0 && angka !== 7)) {
	//     return false
	// }
	for (var i = 2; i < angka; i++) {
		if (angka % i === 0) {
			return false
		}
	}
	return true
}

// TEST CASES
console.log(angkaPrima(3)) // true
console.log(angkaPrima(7)) // true
console.log(angkaPrima(6)) // false
console.log(angkaPrima(23)) // true
console.log(angkaPrima(33)) // false

//   console.log(angkaPrima(1))
//   console.log(angkaPrima(2381))
