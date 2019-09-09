/*

START

SET `dataNilai` to data nilai
CREATE `totalNilai`
FOR `nilai` in `dataNilai` DO
    ADD `nilai` to `totalNilai`

SET `rata2` to `totalNilai` DIVIDED BY amount of `dataNilai` items
FOR `nilai` in `dataNilai` DO
    IF `nilai` > `rata2` THEN
        DISPLAY `nilai`

END

*/










// function displayNilaiLolos(dataNilai) {
//         var totalNilai = 0
        
//         for(var i = 0; i < dataNilai.length; i++) {
//                 totalNilai += dataNilai[i]
//         }
        
//         var rata2 = totalNilai / dataNilai.length
//         console.log(rata2)

//         for(var i = 0; i < dataNilai.length; i++) {
//                 if(dataNilai[i] > rata2) {
//                         console.log(dataNilai[i])
//                 }
//         }
// }

// displayNilaiLolos([3, 5, 5, 6, 4, 8, 9, 2, 4, 7])