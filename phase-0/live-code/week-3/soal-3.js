var size = 20
var hasil = ''

for(var i = 1; i <= 20; i++) {
    if(i % 2 === 0 && i % 3 === 0) {
        hasil += '*'
    } else {
        // var stringAngka = '' + i
        // hasil += stringAngka[stringAngka.length - 1]
        hasil += i % 10
    }
}

console.log(hasil) // 12345*78901*34567*90