function nesting(object) {
	var result = {}
	var keys = Object.keys(object)
	var values = Object.values(object)
	for (var i = 0; i < keys.length; i++) {
		result = recursiveProps(object, keys[i], values[i], 0)
		console.log(result)
	}
	return result
}
function recursiveProps(object, key, value, depth = 0) {
	var obj = {}
	var word = ''
	var counter = 0
	for (var i = 0; i < key.length; i++) {
		if (key[i] === '.') {
			if (counter === depth) {
				obj[word] = { [key.slice(i + 1)]: value }
				object[obj] = recursiveProps(obj[word], key, value, depth + 1)
				break
			} else {
				counter++
			}
		}
	}
	return object
}

console.log(
	nesting({
		name: 'Bagus',
		'batch.number': 35,
		'batch.name': 'Infinite Fox'
	})
)

/* 
  {
    name: 'Bagus',
    batch: {
      number: 35,
      name: 'Infinite Fox'
    }
  }
  */

// console.log(
// 	nesting({
// 		'father.name': 'Suwarno',
// 		'father.age': 50,
// 		'mother.name': 'Suwarni',
// 		'mother.age': 48
// 	})
// )

/*
  {
    father: {
      name: 'Suwarno',
      age: 50
    },
    mother: {
      name: 'Suwarni',
      age: 48
    },
  }
*/

// console.log(
// 	nesting({
// 		'name.firstName': 'Alif',
// 		'name.LastName': 'Aminuddin',
// 		'birth.place': 'Kediri',
// 		'birth.year': 1996,
// 		age: 23,
// 		'parent.fater': 'Prijo',
// 		'parent.mother': 'Widya',
// 		'class.name': 'joyful-fox',
// 		'class.number': 36
// 	})
// )
