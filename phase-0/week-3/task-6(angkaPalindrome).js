function angkaPalindrome(num) {
    while (true) {
        num++
        var numParsed = String(num)
        if (numParsed.length === 1) {
            return num
        }
        for (var i = 0; i < numParsed.length; i++) {
            if (i > numParsed.length - (1 +i)) {
                return num
            }
            if (numParsed[i] !== numParsed[numParsed.length - (1 + i)]) {
                break
            }
        }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

//   console.log(angkaPalindrome(241));
//   console.log(angkaPalindrome(375));
//   console.log(angkaPalindrome(225));