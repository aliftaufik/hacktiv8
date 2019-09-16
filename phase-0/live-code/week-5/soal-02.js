function proxytiaObject(name, role, weapon) {
	var proxytia = {
		ksatria: ['pedang', 'tombak'],
		tabib: ['gada'],
		penyihir: ['tongkat']
	}
	if (!proxytia[role]) {
		return 'Role invalid.'
	}
	for (var i = 0; i < proxytia[role].length; i++) {
		if (weapon === proxytia[role][i]) {
			return `Selamat datang di Proxytia ${role} ${name}, gunakan ${weapon}mu untuk bermain.`
		}
	}
	return 'Senjata invalid.'
}

console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
// Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.

console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
// Senjata invalid.

console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat'))
// Role invalid

console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
// Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.
