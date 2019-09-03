function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var laporan = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        laporan.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 2000 * (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]))
        })
    }
    return laporan
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]