function prime(num) {
	var counter = 0
	var check = 2
	var prime = 0
	isPrime: while (counter < num) {
		for (var i = 2; i < check; i++) {
			if (check % i === 0) {
				check++
				continue isPrime
			}
		}
		prime = check
		counter++
		check++
	}
	return prime
}

console.log(prime()) //0
console.log(prime(0)) //0
console.log(prime(1)) //2
console.log(prime(3)) //5
console.log(prime(4)) //7
console.log(prime(13)) //41
console.log(prime(110)) //601
console.log(prime(666)) //4973
