var tanggal = 65;
var bulan = 1;
var tahun = 3075;

var kalender = '';

switch (bulan) {
    case 1:
        kalender = tanggal + ' Januari ' + tahun; break;
    case 2:
        kalender = tanggal + ' Februari ' + tahun; break;
    case 3:
        kalender = tanggal + ' Maret ' + tahun; break;
    case 4:
        kalender = tanggal + ' April ' + tahun; break;
    case 5:
        kalender = tanggal + ' Mei ' + tahun; break;
    case 6:
        kalender = tanggal + ' Juni ' + tahun; break;
    case 7:
        kalender = tanggal + ' Juli ' + tahun; break;
    case 8:
        kalender = tanggal + ' Agustus ' + tahun; break;
    case 9:
        kalender = tanggal + ' September ' + tahun; break;
    case 10:
        kalender = tanggal + ' Oktober ' + tahun; break;
    case 11:
        kalender = tanggal + ' November ' + tahun; break;
    case 12:
        kalender = tanggal + ' Desember ' + tahun; break;
    default:
        break;
}

console.log(kalender);