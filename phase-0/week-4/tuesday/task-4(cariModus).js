function cariModus(arr) {
	arr.sort(function(a, b) {
		return a - b
	})
	// var modus = [{ angka: arr[0], kaliMuncul: 0 }]
	// var index = 0
	// for (var i = 0; i < arr.length; i++) {
	//     if (arr[i] === modus[index].angka) {
	//         modus[index].kaliMuncul++
	//     } else {
	//         if (modus[index].kaliMuncul === 1) {
	//             modus.pop()
	//             index--
	//         }
	//         modus.push({ angka: arr[i], kaliMuncul: 1 })
	//         index++
	//     }
	// }
	var obj = {}

	// var a = {
	//     a: 1,
	//     b: 2,
	//     c: 3
	// }

	// for Object.keys(a)
	// if (!a[b]) { cek apakah ada key/property b di dalam object a

	// var a = {}
	// a.b = 0 // mudah dibaca, tpi tidak fleksibel
	// a['b'] = 0 // lebih fleksibel, bisa perhitungan, bisa key yang ada spasinya
	// a[arr[i] - 10]

	// }
	for (var i = 0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = 1
		} else {
			obj[arr[i]]++
		}
	}
	if (Object.keys(obj).length === 1 || Object.keys(obj).length === arr.length) {
		return -1
	}
	// if (modus.length === 1 || modus.length === arr.length) {
	// 	return -1
	// }
	// var number = 0
	// var cek = 0
	// for (var i = 0; i < modus.length; i++) {
	// 	if (modus[i].kaliMuncul > cek) {
	// 		number = modus[i].angka
	// 		cek = modus[i].kaliMuncul
	// 	}
	// }
	var number = 0
	var counter = 0
	for (var i = 0; i < Object.keys(obj).length; i++) {
		if (obj[Object.keys(obj)[i]] > counter) {
			number = Object.keys(obj)[i]
			counter = obj[Object.keys(obj)[i]]
		}
	}

	return number
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])) // 4
console.log(cariModus([5, 10, 10, 6, 5])) // 5
console.log(cariModus([10, 3, 1, 2, 5])) // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])) // 3
console.log(cariModus([7, 7, 7, 7, 7])) // -1
