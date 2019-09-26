/*
 * Daftar Harga Barang:
 * | Nama        | Harga        | Poin  |
 * | ----------- | ------------ | ----- |
 * | Shampoo     | Rp    20.000 |  100  |
 * | Sabun       | Rp    10.000 |   90  |
 * | Kompor      | Rp 1.000.000 |   65  |
 * | Bantal      | Rp    25.000 |   20  |
 * | Daging Sapi | Rp   300.000 |   15  |
 */
function belanja(modal) {
	var daftar = [
		{ name: 'Sampoo', price: 20000, point: 100 },
		{ name: 'Sabun', price: 10000, point: 90 },
		{ name: 'Kompor', price: 1000000, point: 65 },
		{ name: 'Bantal', price: 25000, point: 20 },
		{ name: 'Daging Sapi', price: 300000, point: 15 }
	]
	let result = {
		belanja: {},
		kembalian: modal,
		totalPoin: 0
	}
	var masihBeli = true
	while (result.kembalian >= 0 && masihBeli) {
		masihBeli = false
		for (var i = 0; i < daftar.length; i++) {
			if (result.kembalian >= daftar[i].price) {
				result.kembalian -= daftar[i].price
				result.totalPoin += daftar[i].point
				if (!result.belanja[daftar[i].name]) {
					result.belanja[daftar[i].name] = 1
				} else {
					result.belanja[daftar[i].name]++
				}
				masihBeli = true
			}
		}
	}
	result.belanja = result.kembalian === modal ? 'Kosong' : result.belanja
	return result
}

console.log(belanja(100000))
// { belanja: { Shampoo: 2, Sabun: 3, Bantal: 1 },
//   kembalian: 5000,
//   totalPoin: 490 }

console.log(belanja(1000000))
// { belanja: { Shampoo: 7, Sabun: 8, Bantal: 7, 'Daging Sapi': 2 },
//   kembalian: 5000,
//   totalPoin: 1590 }

console.log(belanja(1150500))
// { belanja: { Shampoo: 3, Sabun: 4, Kompor: 1, Bantal: 2 },
//   kembalian: 500,
//   totalPoin: 765 }

console.log(belanja(0))
// {
//   belanja: 'Kosong',
//   kembalian: 0,
//   totalPoin: 0
// }
