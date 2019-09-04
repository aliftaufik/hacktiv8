function kaliTerusRekursif(angka) {
    var parsedAngka = String(angka).split('')
    var result = 1
    for (var i = 0; i < parsedAngka.length; i++) {
        result *= Number(parsedAngka[i])
    }
    if (String(result).length !== 1) {
        return kaliTerusRekursif(result)
    }
    return result
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6