var joyful = ['Faqih', 'Rendo', 'Alif', 'Iqbal', 'Tomi', 'Rizal']

for(var i = 0; i < joyful.length; i++) {
    if(joyful[i].toLocaleLowerCase().indexOf('a') != -1) {
        console.log(joyful[i])
    }
}

for(var i = 0; i < joyful.length; i++) {
    var containA = false
    for( var j = 0; j < joyful[i].length; j++) {
        if(joyful[i][j] == 'a' || joyful[i][j] == 'A') {
            containA = true
        }
    }
    if(containA == true) {
        console.log(joyful[i])
    }
    // console.log(containA == true ? joyful[i] : '')
}