function tukarBesarKecil(kalimat) {
    var tertukar = ''
    for (var i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === kalimat[i].toUpperCase()) {
            tertukar += kalimat[i].toLowerCase()
        } else if (kalimat[i] === kalimat[i].toLowerCase()) {
            tertukar += kalimat[i].toUpperCase()
        } else {
            tertukar += kalimat[i]
        }
    }
    return tertukar
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"