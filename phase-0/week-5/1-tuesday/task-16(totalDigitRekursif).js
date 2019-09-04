function totalDigitRekursif(angka) {
    var parsedAngka = String(angka).split('')
    var sum = Number(parsedAngka[0])
    if (parsedAngka.length > 1) {
        sum += totalDigitRekursif(Number(parsedAngka.slice(1).join('')))
    }
    return sum
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

// console.log(totalDigitRekursif(55555555))
// console.log(totalDigitRekursif(23000))