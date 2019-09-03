function palindrome(kata) {
    // console.log('kata:', kata)
    for (var i = 0; i < kata.length; i++) {
        // console.log('posisi:', i, 'dan', kata.length - (1 + i))
        // console.log('karakter:', kata[i], 'dan', kata[kata.length - (1 + i)])
        if (i > kata.length - (1 +i)) {
            return true
        }
        if (kata[i] !== kata[kata.length - (1 + i)]) {
            return false
        }
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false