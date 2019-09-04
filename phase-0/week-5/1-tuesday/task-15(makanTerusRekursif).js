function makanTerusRekursif(waktu) {
    if (waktu <= 0) {
        return 0
    }
    var makan = 1
    waktu -= 15
    if (waktu > 0) {
        makan += makanTerusRekursif(waktu)
    }
    return makan
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

// console.log(makanTerusRekursif(123))