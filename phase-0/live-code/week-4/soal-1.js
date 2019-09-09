/**
 * PSEUDOCODE
 *
 * START
 *
 * SET `nyawa` to 3
 * SET `tertangkap` to 0
 *
 * FOR each `item` in `gundala` DO
 *  IF `item` is '*' THEN
 *      DECREASE `nyawa` by 1
 *  ELSE IF `item` is 'Begundal' THEN
 *      ADD `tertangkap` by 1
 *
 *  IF `nyawa` is 0 THEN
 *    IF `tertangkap` is 0 THEN
 *      RETURN 'you failed, zero caught'
 *    ELSE RETURN 'you dead, but you got' amount of `tertangkap`
 * END FOR
 *
 * RETURN 'you alive and got all' `tertangkap`
 *
 * END
 */

function basmiKejahatan(gundala) {
  var nyawa = 3
  var tertangkap = 0

  for (var i = 0; i < gundala.length; i++) {
    if (gundala[i] === '*') {
      nyawa--
    } else if (gundala[i] === 'Begundal') {
      tertangkap++
    }

    if (nyawa === 0) {
      if (tertangkap === 0) {
        return 'Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.'
      } else {
        return (
          'Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap ' +
          tertangkap +
          ' begundal.'
        )
      }
    }
  }

  return (
    'Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap ' +
    tertangkap +
    ' begundal.'
  )
}

console.log(
  basmiKejahatan([
    '*',
    '*',
    '#',
    '#',
    'Begundal',
    '#',
    'Begundal',
    'Begundal',
    '#'
  ])
)
// Selamat Gundala, kamu telah memenangkan peperangan! Kamu telah menangkap 3 begundal.

console.log(basmiKejahatan(['*', '*', 'Begundal', '*', '*', '#', 'Begundal']))
// Maaf Gundala, kamu telah gugur. Kamu hanya berhasil menangkap 1 begundal.

console.log(
  basmiKejahatan([
    '*',
    '*',
    '*',
    '*',
    '#',
    'Begundal',
    '*',
    'Begundal',
    '#',
    'Begundal'
  ])
)
// Maaf Gundala, kamu telah gugur. Dan kamu tidak berhasil menangkap para begundal.
