function hitungJumlahKata(kalimat) {
    var kata = kalimat.split(' ')
    return kata.length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

//   console.log(hitungJumlahKata('event-driven: is it a word or 2 words?'))