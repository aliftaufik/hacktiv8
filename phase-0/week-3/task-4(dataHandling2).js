function dataHandling2(data) {
    data.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(data)
    var date = data[3].split('/')
    switch (Number(date[1])) {
        case 1: console.log('Januari'); break;
        case 2: console.log('Februari'); break;
        case 3: console.log('Maret'); break;
        case 4: console.log('April'); break;
        case 5: console.log('Mei'); break;
        case 6: console.log('Juni'); break;
        case 7: console.log('Juli'); break;
        case 8: console.log('Agustus'); break;
        case 9: console.log('September'); break;
        case 10: console.log('Oktober'); break;
        case 11: console.log('November'); break;
        case 12: console.log('Desember'); break;
    }
    console.log(date.sort(function(value1, value2) { return value2 - value1 }))
    // console.log(data[3].split('/').join('-'))
    date = data[3].split('/')
    console.log(date.join('-'))
    console.log(data[1].slice(0, 15))
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
*/