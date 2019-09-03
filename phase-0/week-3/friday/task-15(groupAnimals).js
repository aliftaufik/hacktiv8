function groupAnimals(animals) {
    var kelompok = [[]]
    animals.sort()
    var firstLetter = animals[0].charAt(0)
    var index = 0
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].charAt(0) === firstLetter) {
            kelompok[index].push(animals[i])
        } else {
            kelompok.push([animals[i]])
            firstLetter = animals[i].charAt(0)
            index++
        }
    }
    return kelompok
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]