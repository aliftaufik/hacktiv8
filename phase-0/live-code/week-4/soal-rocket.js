function printBranch(branches) {
  var month = [
    'jan',
    'feb',
    'mar',
    'apr',
    'mei',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
  ]
  var result = []

  for (var i = 0; i < branches.length; i++) {
    var temp = []
    for (var j = 0; j < branches[i][0].length; j++) {
      temp.push(branches[i][0][j] - branches[i][1][j])
    }
    result.push(temp)
  }

  //   var output = '   '
  //   for (i = 0; i < result.length; i++) {
  //     output += ' | ' + 'br ' + (i + 1)
  //   }
  //   for (i = 0; i < result[0].length; i++) {
  //     output += '\n' + month[i] + ' | '
  //     for (j = 0; j < result.length; j++) {
  //       output += result[j][i] + ' | '
  //     }
  //   }

  var output = '\t| '
  for (i = 0; i < result.length; i++) {
    output += 'br ' + (i + 1) + '\t| '
  }
  for (i = 0; i < result[0].length; i++) {
    output += '\n' + month[i] + '\t| '
    for (j = 0; j < result.length; j++) {
      output += result[j][i] + '\t| '
    }
  }

  return (output += '\n')
}

//TEST CASE 1
var data1 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ],
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ]
]

console.log(printBranch(data1))

/*
      | br 1 | br 2 | br 3 |
  jan | 700  | 500  | 1500 |
  feb | 800  | 1300 | 900  |
  mar | 1300 | 1300 | 700  |
  apr | 800  | 800  | 500  |
  may | 1300 | 800  | 300  |
  jun | 2200 | 800  | 800  |
  jul | 2200 | 700  | 800  |
  aug | 1300 | 700  | 1000 |
  sep | 700  | 1500 | 800  |
  oct | 800  | 1300 | 1000 |
  nov | 700  | 800  | 800  |
  dec | 1800 | 1800 | 1800 |
  */

// TEST CASE 2
var data2 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ]
]

console.log(printBranch(data2))
/*
      | br 1 |
  jan | 700  |
  feb | 800  |
  mar | 1300 |
  apr | 800  |
  may | 1300 |
  jun | 2200 |
  jul | 2200 |
  aug | 1300 |
  sep | 700  |
  oct | 800  |
  nov | 700  |
  dec | 1800 |
  */
