function computeGrade(nilai) {
    if(nilai > 100) {
        return 'Anda Cheater!'
    }
    if(nilai >= 85) {
        return 'A'
    } else if(nilai >= 80) {
        return 'A-'
    } else if(nilai >= 75) {
        return 'B+'
    } else if(nilai >= 70) {
        return 'B'
    } else if(nilai >= 65) {
        return 'B-'
    } else if(nilai >= 60) {
        return 'C+'
    } else if(nilai >= 55) {
        return 'C'
    } else {
        return 'Tidak Lulus'
    }
  }
  
  console.log(computeGrade(56)); //C
  console.log(computeGrade(49)); //Tidak Lulus
  console.log(computeGrade(74)); //B
  console.log(computeGrade(80)); //A-
  console.log(computeGrade(79)); //B+
  console.log(computeGrade(55)); //C
  console.log(computeGrade(73)); //B
  console.log(computeGrade(89)); //A
  console.log(computeGrade(133)); //Anda Cheater!
  console.log(computeGrade(-5)); //Tidak Lulus