function sorting(arrNumber) {
    // return arrNumber.sort(function(a, b) { return a - b }); => using javascript array method

    // using manual insertion sort
    for (i = 1; i < arrNumber.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arrNumber[j - 1] > arrNumber[j]) {
                var temp = arrNumber[j - 1]
                arrNumber[j - 1] = arrNumber[j]
                arrNumber[j] = temp
            }
        }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    if (arrNumber === undefined || arrNumber.length === 0) {
        return ''
    }
    var highest = arrNumber[arrNumber.length - 1]
    var pop = 0
    for (var i = arrNumber.length - 1; i >= 0; i--) {
        if (arrNumber[i] === highest) {
            pop++
        } else {
            break
        }
    }
    return 'angka paling besar adalah ' + highest + ' dan jumlah kemunculan sebanyak ' + pop + ' kali'
    
    // var numbers = {} => I thought I need to find the mode, but found out I just need to find the highest number
    // for (var i = 0; i < arrNumber.length; i++) {
    //     if (numbers[arrNumber[i]] === undefined) {
    //         numbers[arrNumber[i]] = 1
    //     } else {
    //         numbers[arrNumber[i]] += 1
    //     }
    // }
    // console.log(numbers)
    // var highest, pop = 0
    // for (i = 0; i < Object.keys(numbers).length; i++) {
    //     if (numbers[Object.keys(numbers)[i]] > pop) {
    //         highest = Object.keys(numbers)[i]
    //         pop = numbers[Object.keys(numbers)[i]]
    //     }
    // }
}

function mostFrequentLargestNumbers(arrNumber) {
var listSort = sorting(arrNumber);
var countHighest = getTotal(listSort);
return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''