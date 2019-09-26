function matrixGenerator(str) {
	var len = str.length
	var num = 1
	while (true) {
		if (num * num >= len) {
			break
		}
		num++
	}
	var result = []
	var temp = []
	for (var i = 0; i < num * num; i++) {
		if (i !== 0 && i % num === 0) {
			result.push(temp)
			temp = !str[i] ? ['*'] : [str[i]]
		} else {
			temp.push(!str[i] ? '*' : str[i])
		}
	}
	result.push(temp)
	return result
}

console.log(matrixGenerator('abcdefgh'))
// [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', '*' ] ]

console.log(matrixGenerator('pq98d327b5c3v'))
/*
  [ [ 'p', 'q', '9', '8' ],
    [ 'd', '3', '2', '7' ],
    [ 'b', '5', 'c', '3' ],
    [ 'v', '*', '*', '*' ] ]
  */

console.log(matrixGenerator('q289c370bcq2f98fdg89'))
/*
  [ [ 'q', '2', '8', '9', 'c' ],
    [ '3', '7', '0', 'b', 'c' ],
    [ 'q', '2', 'f', '9', '8' ],
    [ 'f', 'd', 'g', '8', '9' ],
    [ '*', '*', '*', '*', '*' ] ]
  */

console.log(matrixGenerator('654dg8erfg654dsf3g2d4sfg657sfdg89'))
/*
  [ [ '6', '5', '4', 'd', 'g', '8' ],
    [ 'e', 'r', 'f', 'g', '6', '5' ],
    [ '4', 'd', 's', 'f', '3', 'g' ],
    [ '2', 'd', '4', 's', 'f', 'g' ],
    [ '6', '5', '7', 's', 'f', 'd' ],
    [ 'g', '8', '9', '*', '*', '*' ] ]
  */

console.log(matrixGenerator('p23f4793847f9834jd983274t0'))
/*
  [ [ 'p', '2', '3', 'f', '4', '7' ],
    [ '9', '3', '8', '4', '7', 'f' ],
    [ '9', '8', '3', '4', 'j', 'd' ],
    [ '9', '8', '3', '2', '7', '4' ],
    [ 't', '0', '*', '*', '*', '*' ],
    [ '*', '*', '*', '*', '*', '*' ] ]
  */
