function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        var literal = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: 2019 - arr[i][3] >= 2019 || arr[i].length !== 4 ? 'Invalid Bearth Year' : 2019 - arr[i][3]
        }
        console.log('' + (i + 1) + '. ' + literal.firstName + ' ' + literal.lastName + ':')
        console.log(literal)
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""