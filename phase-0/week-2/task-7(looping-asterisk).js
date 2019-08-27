// Nomer 1
var rows1 = 5;
while (rows1 > 0) {
    console.log('*');
    rows1--;
}

// Nomer 2
var rows2 = 5;
for(var i = 0; i < rows2; i++) {
    var asterisk = '';
    for(var j = 0; j < rows2; j++) {
        asterisk += '*';
    }
    console.log(asterisk);
}

// Nomer 3
var rows3 = 5;
for(var i = 1; i <= rows3; i++) {
    var asterisk = '';
    for(var j = 1; j <= i; j++) {
        asterisk += '*';
    }
    console.log(asterisk);
}
