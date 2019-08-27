// Nomer 1
var counter = 0;

console.log('LOOPING PERTAMA');
while(counter < 20) {
    counter += 2;
    console.log(counter + ' - I love coding');
}

console.log('LOOPING KEDUA');
while(counter > 0) {
    console.log(counter + ' - I will become fullstack developer');
    counter -= 2;
}

// Nomer 2
console.log('LOOPING PERTAMA');
for(var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var i = 20; i > 0; i--) {
    console.log(i + ' - I will become fullstack developer');
}

// Nomer 3
for(var i = 1; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

for(var i = 1; i <= 100; i += 2) {
    if(i % 3 === 0) {
        console.log(i + ' kelipatan 3');
    }
}

for(var i = 1; i <= 100; i += 5) {
    if(i % 6 === 0) {
        console.log(i + ' kelipatan 6');
    }
}

for(var i = 1; i <= 100; i += 9) {
    if(i % 10 === 0) {
        console.log(i + ' kelipatan 10');
    }
}