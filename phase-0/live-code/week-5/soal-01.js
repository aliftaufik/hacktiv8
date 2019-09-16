/**
 * START
 *
 * CREATA an empty `object`
 * FOR each `item` in `input` DO
 *      IF `object` which key is `item` NOT exist THEN
 *          ASSIGN `item` to `object` key AND ASSIGN the value to 1
 *      ELSE
 *          ADD 1 to `object` which key is `item`
 * RETURN `object`
 *
 * END
 */

function counter(arr) {
	var result = {}
	for (var i = 0; i < arr.length; i++) {
		if (!result[arr[i]]) {
			result[arr[i]] = 1
		} else {
			result[arr[i]]++
		}
	}
	return result
}

console.log(
	counter([
		'Joyful',
		'Infinite',
		'Humble',
		'Joyful',
		'Glory',
		'King',
		'Humble',
		'Infinite'
	])
)
// { Joyful: 2, Infinite: 2, Humble: 2, Glory: 1, King: 1 }

console.log(
	counter([true, true, false, true, false, true, false, false, true, false])
)
// { true: 5, false: 5 }

console.log(
	counter([
		1,
		2,
		3,
		4,
		5,
		6,
		4,
		3,
		2,
		5,
		6,
		8,
		7,
		6,
		9,
		8,
		7,
		0,
		8,
		7,
		6,
		5,
		4,
		3
	])
)
// {
//   '0': 1,
//   '1': 1,
//   '2': 2,
//   '3': 3,
//   '4': 3,
//   '5': 3,
//   '6': 4,
//   '7': 3,
//   '8': 3,
//   '9': 1
// }
