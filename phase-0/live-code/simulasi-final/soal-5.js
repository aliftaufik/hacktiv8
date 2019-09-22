function ongkosKirim(pengirim) {
	var route = ['Depok', 'Jakarta', 'Bandung', 'Surabaya', 'Bali']
	var result = []
	for (var i = 0; i < pengirim.length; i++) {
		var obj = {
			pengirim: pengirim[i].nama,
			tagihan: 0
		}
		var asal = -1
		var tujuan = -1
		for (var j = 0; j < route.length; j++) {
			if (pengirim[i].asal === route[j]) {
				asal = j
			}
			if (pengirim[i].tujuan === route[j]) {
				tujuan = j
			}
		}
		obj.tagihan =
			asal === -1 || tujuan === -1
				? 0
				: asal === tujuan
				? 9000
				: asal > tujuan
				? pengirim[i].ekspedisi === 'NJE'
					? (asal - tujuan) * 9000 - ((asal - tujuan) * 9000 * 10) / 100
					: (asal - tujuan) * 9000
				: pengirim[i].ekspedisi === 'NJE'
				? (tujuan - asal) * 9000 - ((tujuan - asal) * 9000 * 10) / 100
				: (tujuan - asal) * 9000

		result.push(obj)
	}
	return result
}

var case1 = [
	{ nama: 'Jasper', asal: 'Depok', tujuan: 'Jakarta', ekspedisi: 'NJE' },
	{
		nama: 'Kevin',
		asal: 'Jakarta',
		tujuan: 'Surabaya',
		ekspedisi: 'Si Lambat'
	},
	{ nama: 'Barry', asal: 'Bali', tujuan: 'Bandung', ekspedisi: 'NJE' }
]

console.log(ongkosKirim(case1))
/*
  [
    { pengirim: 'Jasper', tagihan: 8100 },
    { pengirim: 'Kevin', tagihan: 18000 },
    { pengirim: 'Barry', tagihan: 16200 }
  ]
  */

var case2 = [
	{ nama: 'Patricia', asal: 'Jakarta', tujuan: 'Jakarta', ekspedisi: 'TnJ' },
	{ nama: 'Anne', asal: 'Medan', tujuan: 'Depok', ekspedisi: 'NJE' }
]

console.log(ongkosKirim(case2))
/*
  [ 
    { pengirim: 'Patricia', tagihan: 9000 },
    { pengirim: 'Anne', tagihan: 0 }
  ]
  */
