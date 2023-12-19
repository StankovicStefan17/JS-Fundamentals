'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

//   order(starterIndex, MainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
//   },
// };

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// //with optinal chaining
// // console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

// console.log(restaurant.orderRice?.(0, 1) ?? `Method does not exist`);

// const users = [{ name: `jonas`, email: `hello@gj` }];

// console.log(users[0]?.name ?? `user array empty`);

// if (users.length > 0) console.log(users[0].name);
// else console.log(`user array is empty`);

// const properties = Object.keys(openingHours);
// console.log(properties);
// //looping over keys
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// let openStr = `We are open on ${properties.length} days `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //properti Values

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// //console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//  moja resenja
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}

let avrageOdds = 0;
//console.log(game.odds);
for (const odd of Object.values(game.odds)) {
  console.log(odd);
  avrageOdds += odd;
  console.log(avrageOdds);
}
let number = Object.keys(game.odds);
console.log(number.length);
console.log(avrageOdds);
avrageOdds /= number.length;
console.log(avrageOdds);

//3. nije bas najboje
const team1 = 'team1';
const team2 = 'team2';
const draw = 'x';

console.log(`Odd of victory ${game[team1]}: ${game.odds[team1]}
Odd of draw: ${game.odds[draw]}
Odd of victory ${game[team2]}: ${game.odds[team2]}`);

//3: njegovo resenje;
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

  console.log(`Odd of ${teamStr} ${odd}`);
}

// const scorers = {};
// const playersAlreayScored = { PAS, numGoals: 0 };

// const scorers = { player: 20, player2: 30 };

// // scorers = [{ player3: 20 }, ...scorers];
// scorers.player3 = 40;
// console.log(scorers);

// for (const [player] of game.scored) {
//   //   if(playersAlreayScored>0)
//   //   {
//   //     for(const [PAS] of playersAlreayScored)
//   //   {
//   //     if(PAS === player)
//   //         playersAlreayScored.numGoals +=1
//   //   };
//   // }
//   //   else
//   //   {
//   //   }
// }

// for (const scorers1 of Object.keys(scored)) {
// }

// // njegova resenja

// for (const player of game.scored) {
//   console.log('Ulazak');
//   for (const object of Object.keys(scorers)) {
//     console.log('Ulazak');
//     console.log(object);
//     console.log(player);
//     if (player == object) {
//       console.log(object);
//       scorers[player] += 1;
//     } else {
//       scorers[player] = 1;
//     }
//   }
// }
// const playerscored = Object.values(game.scored);

// for (const [i, play] of playerscored.entries()) {
//   console.log(i);
//   if (scorers[play] == play) {
//     scorers[play] += 1;
//   } else {
//     scorers[play] = 1;
//   }
// }

// console.log(``);
// console.log('playerscored ' + playerscored);

// console.log('scorers ' + scorers);
// console.log(Object.keys(scorers));
// console.log(Object.values(scorers));
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log('scorers ' + Object.keys(scorers) + Object.values(scorers));
