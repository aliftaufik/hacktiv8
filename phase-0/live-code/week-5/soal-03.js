function kenaRazia(date, data) {
	var lokasiRazia = [
		'Gajah Mada',
		'Hayam Wuruk',
		'Sisingamangaraja',
		'Panglima Polim',
		'Fatmawati',
		'Tomang Raya'
	]
	if (date % 2 === 0) {
		var genap = true
	} else {
		var genap = false
	}

	var result = []
	for (var i = 0; i < data.length; i++) {
		var spaceCounter = 0
		for (var p = 0; p < data[i].plat.length; p++) {
			if (data[i].plat[p] === ' ') {
				spaceCounter++
				if (spaceCounter === 2) {
					var lastNumber = Number(data[i].plat[p - 1])
					break
				}
			}
		}
		if ((lastNumber % 2 === 0) !== genap) {
			var tertilang = { name: data[i].name, tilang: 0 }
			for (var j = 0; j < data[i].rute.length; j++) {
				for (var k = 0; k < lokasiRazia.length; k++) {
					if (data[i].rute[j] === lokasiRazia[k]) {
						tertilang.tilang++
						break
					}
				}
			}
			if (tertilang.tilang > 0) {
				result.push(tertilang)
			}
		}
	}
	return result
}

console.log(
	kenaRazia(27, [
		{
			name: 'Denver',
			plat: 'B 2791 KDS',
			type: 'Mobil',
			rute: ['TB Simatupang', 'Panglima Polim', 'Depok', 'Senen Raya']
		},
		{
			name: 'Toni',
			plat: 'B 1212 JBB',
			type: 'Mobil',
			rute: [
				'Pintu Besar Selatan',
				'Panglima Polim',
				'Depok',
				'Senen Raya',
				'Kemang'
			]
		},
		{
			name: 'Stark',
			plat: 'B 444 XSX',
			type: 'Motor',
			rute: ['Pondok Indah', 'Depok', 'Senen Raya', 'Kemang']
		},
		{
			name: 'Anna',
			plat: 'B 678 DD',
			type: 'Mobil',
			rute: [
				'Fatmawati',
				'Panglima Polim',
				'Depok',
				'Senen Raya',
				'Kemang',
				'Gajah Mada'
			]
		}
	])
)

// [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
