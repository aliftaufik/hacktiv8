function cariPelaku(str) {
    var match = str.match(/abc/g)
    if (match === null) {
        return 'Not Found'
    }
    return match.length
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2

console.log(cariPelaku('ccacbddrtz'))