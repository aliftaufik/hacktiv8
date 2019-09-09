function fpb(angka1, angka2) {
    var start = angka1 < angka2 ? angka1 : angka2
    // var iterationNumber = 0
    for (i = start; i > 0; i--) {
        // iterationNumber++
        if (angka1 % i === 0 && angka2 % i === 0) {
            // console.log(iterationNumber) => it was used to check whether using var start would make it faster or not
            return i
        }
    }
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1