function ubahHuruf(kata) {
    var terubah = ''
    for (var i = 0; i < kata.length; i++) {
        if (kata[i] === 'z') {
            terubah += 'a'
        } else {
            terubah += String.fromCharCode(kata.charCodeAt(i) + 1)
        }
    }
    return terubah
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('cobakaloadaznya'))