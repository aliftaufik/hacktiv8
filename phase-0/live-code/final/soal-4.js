function countryCollection(countries) {
	var result = []
	for (var i = 0; i < countries.length; i++) {
		for (var j = 0; j <= result.length; j++) {
			if (!result[j]) {
				result.push([countries[i][0], countries[i]])
				break
			} else if (result[j][0] === countries[i][0]) {
				result[j].push(countries[i])
				break
			}
		}
	}
	for (var i = 0; i < result.length; i++) {
		result[i].push(result[i].length - 1)
	}
	return result
}

console.log(
	countryCollection([
		'Barbados',
		'Oman',
		'Gibraltar',
		'Malaysia',
		'Suriname',
		'Mayotte',
		'Turkmenistan',
		'Austria',
		'Somalia'
	])
)
// [
//   [ 'B', 'Barbados', 1 ],
//   [ 'O', 'Oman', 1 ],
//   [ 'G', 'Gibraltar', 1 ],
//   [ 'M', 'Malaysia', 'Mayotte', 2 ],
//   [ 'S', 'Suriname', 'Somalia', 2 ],
//   [ 'T', 'Turkmenistan', 1 ],
//   [ 'A', 'Austria', 1 ]
// ]

console.log(
	countryCollection([
		'Bhutan',
		'Comoros',
		'Botswana',
		'Iceland',
		'Lesotho',
		'Liechtenstein',
		'Malawi',
		'Algeria',
		'Azerbaijan',
		'Indonesia',
		'Andorra',
		'Armenia'
	])
)
// [
//   [ 'B', 'Bhutan', 'Botswana', 2 ],
//   [ 'C', 'Comoros', 1 ],
//   [ 'I', 'Iceland', 'Indonesia', 2 ],
//   [ 'L', 'Lesotho', 'Liechtenstein', 2 ],
//   [ 'M', 'Malawi', 1 ],
//   [ 'A', 'Algeria', 'Azerbaijan', 'Andorra', 'Armenia', 4 ]
// ]
