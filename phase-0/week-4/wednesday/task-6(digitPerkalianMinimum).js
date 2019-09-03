function digitPerkalianMinimum(angka) {
    var digitTerkecil = angka + 1
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            var digit = '' + i + (angka / i)
            if (digit.length < digitTerkecil) {
                digitTerkecil = digit.length
            }
        }
    }
    return digitTerkecil
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2