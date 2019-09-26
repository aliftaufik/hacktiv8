function prime(num) {
	var checker = 2
	var indexPrime = 0
	isPrime: while (checker <= num) {
		for (var i = 2; i < checker; i++) {
			if (checker % i === 0) {
				if (checker === num) {
					return -1
				}
				checker++
				continue isPrime
			}
		}
		if (checker === num) {
			return indexPrime + 1
		}
		indexPrime++
		checker++
	}
}

console.log(prime(5)) //3
console.log(prime(27)) //-1
console.log(prime(7)) //4
console.log(prime(41)) //13
console.log(prime(601)) //110
console.log(prime(99)) //-1
console.log(prime(4973)) //666
