function changeVocals (str) {
  var strArr = str.split('')
  for (var i = 0; i < str.length; i++) {
    switch(strArr[i]) {
      case 'a': strArr[i] = 'b'; break;
      case 'i': strArr[i] = 'j'; break;
      case 'u': strArr[i] = 'v'; break;
      case 'e': strArr[i] = 'f'; break;
      case 'o': strArr[i] = 'p'; break;
      case 'A': strArr[i] = 'B'; break;
      case 'I': strArr[i] = 'J'; break;
      case 'U': strArr[i] = 'V'; break;
      case 'E': strArr[i] = 'F'; break;
      case 'O': strArr[i] = 'P'; break;
    }
  }
  // console.log('change vocal:', strArr.join(''))
  return strArr.join('')
}

function reverseWord (str) {
  var reversed = ''
  for (var i = str.length - 1; i >= 0; i --) {
    reversed += str[i]
  }
  // console.log('reverse:', reversed)
  return reversed
}

function setLowerUpperCase (str) {
  var strArr = str.split('')
  for (var i = 0; i < str.length; i++) {
    if (strArr[i].toUpperCase() === strArr[i]) {
      strArr[i] = strArr[i].toLowerCase()
    } else {
      strArr[i] = strArr[i].toUpperCase()
    }
  }
  // console.log('to lower upper case:', strArr.join(''))
  return strArr.join('')
}

function removeSpaces (str) {
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  // console.log('-----------')
  // console.log('name:', name)
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'