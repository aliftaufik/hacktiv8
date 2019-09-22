function steam(arr) {
	var sales = [
		{
			title: 'Grand Theft Auto V',
			short: 'gta5',
			price: 290000,
			genre: 'action'
		},
		{
			title: "Assassin's Creed Odyssey",
			short: 'aco',
			price: 500000,
			genre: 'rpg'
		},
		{
			title: 'Counter Strike: Global Offensive',
			short: 'csgo',
			price: 120000,
			genre: 'first-person shooter'
		},
		{
			title: "Playerunknown's Battlegrounds",
			short: 'pubg',
			price: 210000,
			genre: 'first-person shooter'
		},
		{
			title: 'Monster Hunter: World',
			short: 'mhw',
			price: 250000,
			genre: 'action'
		}
	]

	var result = {}
	var total = 0
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < sales.length; j++) {
			if (arr[i] === sales[j].short) {
				if (!result[sales[j].genre]) {
					result[sales[j].genre] = [{ title: sales[j].title }]
				} else {
					result[sales[j].genre].push({ title: sales[j].title })
				}
				total += sales[j].price
			}
		}
	}
	result.subTotal = total
	return result
}

console.log(steam([]))
// {
//   subTotal: 0
// }

console.log(steam(['gta5', 'aco']))
// {
//   action: [{ title: 'Grand Theft Auto' }],
//   rpg: [{title: 'Assassins Creed Odyssey'}],
//   subTotal: 790000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   rpg: [{ title: 'Assassins Creed Odyssey'}],
//   'first-person shooter': [{ title: 'Playerunknowns Battlegrounds'}],
//   action: [{ title: 'Monster Hunter: World'}],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))
// {
//   action: [
//     {
//       title: 'Grand Theft Auto V'
//     }, {
//       title: 'Monster Hunter: World'
//     }
//   ],
//   rpg: [
//     {
//       title: 'Assassins Creed Odyssey'
//     }
//   ],
//   'first-person shooter': [
//     {
//       title: 'Playerunknowns Battlegrounds'
//     }, {
//       title: 'Counter Strike: Global Offensive'
//     }
//   ],
//   subTotal: 1370000
// }
