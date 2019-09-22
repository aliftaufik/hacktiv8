function nesting(object) {
	var result = {}
	var keys = Object.keys(object)
	var values = Object.values(object)
	for (var i = 0; i < keys.length; i++) {
		var word = ''
		var isFound = false
		for (var j = 0; j < keys[i].length; j++) {
			if (keys[i][j] === '.') {
				var key = word
				word = ''
				isFound = true
			} else {
				word += keys[i][j]
			}
		}
		if (isFound) {
			if (!result[key]) {
				result[key] = { [word]: values[i] }
			} else {
				result[key][word] = values[i]
			}
		} else {
			result[word] = values[i]
		}
	}
	return result
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

console.log(
	nesting({
		'father.name': 'Suwarno',
		'father.age': 50,
		'mother.name': 'Suwarni',
		'mother.age': 48
	})
)

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

console.log(
	nesting({
		'name.firstName': 'Alif',
		'name.LastName': 'Aminuddin',
		'birth.place': 'Kediri',
		'birth.year': 1996,
		age: 23,
		'parent.fater': 'Prijo',
		'parent.mother': 'Widya',
		'class.name': 'joyful-fox',
		'class.number': 36
	})
)
