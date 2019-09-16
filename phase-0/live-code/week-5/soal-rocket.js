function jumlahTabungan(listHarga, history) {
	var result = {}
	var arrHistory = []
	var string = ''
	var arrHarian = []
	for (var i = 0; i < history.length; i++) {
		if (history[i] === '-' || history[i] === ',') {
			arrHarian.push(string)
			string = ''
		} else if (history[i] === '.') {
			arrHarian.push(string)
			arrHistory.push(arrHarian)
			arrHarian = []
			string = ''
		} else {
			string += history[i]
		}
	}
	arrHarian.push(string)
	arrHistory.push(arrHarian)

	for (i = 0; i < arrHistory.length; i++) {
		result[arrHistory[i][0]] = 10000
		for (var j = 1; j < arrHistory[i].length; j++) {
			for (var k = 0; k < listHarga.length; k++) {
				if (arrHistory[i][j] === listHarga[k].nama) {
					result[arrHistory[i][0]] -= listHarga[k].harga
				}
			}
		}
	}
	result.TotalTabungan = 0
	for (i = 0; i < Object.keys(result).length - 1; i++) {
		result.TotalTabungan += result[Object.keys(result)[i]]
	}
	return result
}

var hargaMakanan = [
	{
		nama: 'ayam',
		harga: 5000
	},
	{
		nama: 'nasi',
		harga: 2000
	},
	{
		nama: 'cola',
		harga: 1000
	},
	{
		nama: 'chiki',
		harga: 1500
	},
	{
		nama: 'hotdog',
		harga: 3000
	},
	{
		nama: 'aqua',
		harga: 2000
	}
]

var historyPembelian = `Senin-ayam,nasi,cola.Selasa-chiki,hotdog.Rabu-ayam,chiki.Kamis-hotdog.Jumat-chiki,cola,nasi`
console.log(jumlahTabungan(hargaMakanan, historyPembelian))
// OUTPUT:
// {
//     Senin: 2000,
//     Selasa: 5500,
//     Rabu: 3500,
//     Kamis: 7000,
//     Jumat: 5500,
//     TotalTabungan: 23500
// }
