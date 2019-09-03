function targetTerdekat(arr) {
    var o = arr.indexOf('o')
    var selisih = arr.length
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'x' && Math.abs(o - i) < selisih) {
            selisih = Math.abs(o - i)
        }
    }
    if (selisih == arr.length) {
        return 0
    }
    return selisih
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

/**
 * Cari karakter 'o'
 * Setelah karakter 'o' ditemukan, cari lagi karakter yang satunya ('x')
 * Tiap kali karakter 'x' ditemukan hitung selisih index kedua karakter
 * Buat variabel untuk menyimpan selisih terkecil
 * Return variabel selisih
 */