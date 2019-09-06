function kotakBerlipat(determinant) {
    if(determinant < 1) {
        return 'Angka harus nilai positif.'
    } else if(determinant == undefined) {
        return 'Angka harus diisi.'
    }

    var hasil = ''

    for(var i = 1; i <= determinant; i++) {
        for(var j = 1; j <= determinant; j++) {
            var kelipatan = i * j
            if(kelipatan % determinant == 0) {
                hasil += '@ '
            } else {
                hasil += '* '
            }
        }
        hasil += '\n'
    }
    
    return hasil
}

  
kotakBerlipat(2);
// Output
// * @
// @ @
console.log(kotakBerlipat(2));

kotakBerlipat(10);
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * @ * @ * @ * @ * @
// * * * * @ * * * * @
// * * * * * * * * * @
// * * * * @ * * * * @
// * * * * * * * * * @
// @ @ @ @ @ @ @ @ @ @
console.log(kotakBerlipat(10));

kotakBerlipat(-1); // Angka harus nilai positif.
console.log(kotakBerlipat(-1));

kotakBerlipat(); // Angka harus diisi.
console.log(kotakBerlipat());