function balikString(string) {
    var terbalik = ''
    for (var i = string.length - 1; i >= 0; i--) {
        terbalik += string[i]
    }
    return terbalik
}

console.log(balikString('Hello World!'))
console.log(balikString('Kasur InI rusaK'))