var nama = 'Alex';
var peran = 'Penyihir';
var pesan = '';

if(nama !== '') {
    if(peran == '') {
        console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
    } else {
        if(peran == 'Ksatria') {
            pesan = 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!';
        } else if(peran == 'Tabib') {
            pesan = 'Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.';
        }else if(peran == 'Penyihir') {
            pesan = 'Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!';
        }
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        console.log(pesan);
    }
} else {
    console.log('Nama harus diisi!');
}