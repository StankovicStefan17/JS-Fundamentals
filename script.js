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

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //  moja resenja
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }

// let avrageOdds = 0;
// //console.log(game.odds);
// for (const odd of Object.values(game.odds)) {
//   console.log(odd);
//   avrageOdds += odd;
//   console.log(avrageOdds);
// }
// let number = Object.keys(game.odds);
// console.log(number.length);
// console.log(avrageOdds);
// avrageOdds /= number.length;
// console.log(avrageOdds);

// //3. nije bas najboje
// const team1 = 'team1';
// const team2 = 'team2';
// const draw = 'x';

// console.log(`Odd of victory ${game[team1]}: ${game.odds[team1]}
// Odd of draw: ${game.odds[draw]}
// Odd of victory ${game[team2]}: ${game.odds[team2]}`);

// //3: njegovo resenje;
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr} ${odd}`);
// }

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
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log('scorers ' + Object.keys(scorers) + Object.values(scorers));

// const ordersSet = new Set(['Pasta', 'pica', 'Pasta', 'rizoto']);

// console.log(ordersSet);

// console.log(new Set('Stefan'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pica'));
// console.log(ordersSet.has('pica1'));
// ordersSet.add('bread');
// ordersSet.delete('rizoto');

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example;

// const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager'];

// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Chef', 'Manager']).size);

// const rest = new Map();

// rest.set('name', 'calsicco');
// rest.set(1, 'firenze');
// rest.set(2, 'lisabon');

// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;

// // rest.get(time > rest.get(open) && time < rest.get('close'));
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest);

// rest.get([1, 2]);
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// const question = new Map([
//   ['question', 'what is the best programing language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again'],
// ]);

// console.log(question);

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key == 'number') console.log(`answer ${key}: ${value}`);
// }

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get(answer === question.get('correct')));

// console.log(answer === question.get('correct'));

// convert map to array

// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(...question.values());

//simple LIst > Arrays or Sets
// Key/values > object or maps;

/*
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// //1. IZMENA DODAJ SPRED OPERATOR

// const uniqGameEvents = new Set();

// for (const [value] of gameEvents) uniqGameEvents.add(gameEvents.get(value));

// console.log(uniqGameEvents);

// //RESENJE ZA 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2.
// gameEvents.delete(64);
// console.log(gameEvents);

// let maxNumberGoals = 0;
// let maxNumberSubs = 0;
// let maxNumberYellow = 0;
// let maxNumberRed = 0;

// //3.
// for (const [key, event] of gameEvents) {
//   if (event === '⚽️ GOAL') maxNumberGoals++;

//   if (event === '🔁 Substitution') maxNumberSubs++;

//   if (event === '🔶 Yellow card') maxNumberYellow++;

//   if (event === '🔴 Red card') maxNumberRed++;
// }

// console.log(maxNumberYellow);
// for (const key of uniqGameEvents) {
//   if (key === '⚽️ GOAL')
//     console.log(
//       `An ${key} happened, on average, every ${90 / maxNumberGoals} minutes"`
//     );

//   if (key === '🔁 Substitution')
//     console.log(
//       `An ${key} happened, on average, every ${90 / maxNumberSubs} minutes"`
//     );

//   if (key === '🔶 Yellow card')
//     console.log(
//       `An ${key} happened, on average, every ${90 / maxNumberYellow} minutes"`
//     );

//   if (key === '🔴 Red card')
//     console.log(
//       `An ${key} happened, on average, every ${90 / maxNumberRed} minutes"`
//     );
// }

// // answer of 3 it means for all events thogether
// console.log(`an event happen, on avrage, every ${90 / gameEvents.size}`);

// //4.
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else {
//     console.log(`[SECOND HALF] ${key}: ${value}`);
//   }
// }

// //answer

// for (const [key, value] of gameEvents) {
//   const half = key <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${key}: ${value}`);
// }
const airline = `TAP Air Portugal`;
const plane = `A320`;

// console.log(plane[0]);

// for (let i = 0; i < plane.length; i++) {
//   console.log(plane[i]);
// }

// console.log(airline.length);
// console.log(`b737`.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));

// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-8));
// console.log(airline.slice(-8, -10));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats

//   // console.log(seat.slice(seat.length - 1));
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log(`you got middle seat`);
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String(`jonas`));
// console.log(typeof new String(`jonas`).slice(1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name;

// const passenger = 'jOnaAS'; //

// const passengerLower = passenger.toLowerCase();
// console.log(passenger);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // comaring email

// const email = `hello@jonas.io`;
// const loginEmial = `  Hello@jonas.Io \n`;

// const lEmailLower = loginEmial.toLowerCase();
// const complEmail = lEmailLower.trim();

// console.log(complEmail);

// const normlEmail = loginEmial.toLowerCase().trim();
// console.log(normlEmail);

// console.log(email === normlEmail);

// // replacing
// const priceGB = '288,94e';

// const priceUS = priceGB.replace('e', '$').replace(',', '.');
// console.log(priceUS);

// const annouce = 'All passangers come to bording door 23. borading door 23';

// console.log(annouce.replace('door', 'gate').replace('door', 'gate'));

// //new metod
// console.log(annouce.replaceAll('door', 'gate'));

// console.log(annouce.replace(/door/g, 'gate'));

// // Booleans
// const plane1 = 'Airbus A320neo';

// console.log(plane1.includes('neo'));
// console.log(plane1.startsWith('neo'));

// if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) console.log('Part');

// //Practice exerciese
// const checkBaggage = function (items) {
//   const itemsLower = items.toLowerCase();
//   if (itemsLower.includes('kinfe') || itemsLower.includes('gun')) {
//     console.log('You are not allow aboard!');
//   } else {
//     console.log('You are  allow aboard!');
//   }
// };

// checkBaggage('ihave a laptop, some Gun, pocket knife');
// checkBaggage('gun wit me');
// checkBaggage('only camera');

// // nASTAVI NA 3 MINUTA DO KRAJA;

// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// console.log(letters);
// console.log(letters.toLowerCase());

// console.log('a+b+verry+string'.split('+'));
// console.log('Stefan Stankvoic'.split(' '));

// const [firstName, LastName] = 'Stefan Stankovic'.split(' ');

// console.log(firstName, LastName);

// const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');

// console.log(newName);

// const passanger = 'jess ann smith devise';

// const capitalizName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));

//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizName(passanger);
// capitalizName('Alisa strim');
// capitalizName('stfan stankovic sasa dragica una paja');

// const mes = 'go to gate 23';
// console.log(mes.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(43385468756354));
// console.log(maskCreditCard(4546487981111));

// //Repeat
// const message2 = 'Bad weather.. All departues Delayed... ';

// console.log(message2.repeat(5));

// const planeInLine = function (n) {
//   console.log(`There are ${n} planes in line`.repeat(n));
// };

// planeInLine(4);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

const convertinCamelCase = function () {
  const text = document.querySelector('textarea').value;
  console.log(text);
  console.log('kliknuto');

  const textSplit = text.split('\n');
  console.log(textSplit);

  // for (const ts of textSplit) {
  //   const textTrimAndSplit = ts.toLowerCase().trim();

  //   console.log(textTrimAndSplit);

  //   const index = textTrimAndSplit.indexOf('_');
  //   console.log(index);
  //   console.log(textTrimAndSplit[index + 1].toUpperCase());
  //   console
  //     .log

  //     //.replace([textTrimAndSplit[index + 1]], '')
  //     ();
  //   const textPreFinale = textTrimAndSplit.replace('_', [
  //     textTrimAndSplit[index + 1].toUpperCase(),
  //   ]);
  //   console.log('index x ' + index);
  //   const textFinale = replaceAt(index + 1, textPreFinale, '');

  //   // textFinale//textPreFinale.replace([textPreFinale[index + 1]], '');
  //   // console.log(textFinale);

  //   console.log('finale: ' + textFinale);
  //   // console.log(textPreFinale[index + 1]);
  // }

  const like = '✅';
  let i = 1;

  for (const tx of textSplit) {
    const trimAndLowerCase = tx.toLowerCase().trim();
    const tAndLSplit = trimAndLowerCase.split('_');
    const secondCharacterUpper =
      tAndLSplit[1][0].toUpperCase() + tAndLSplit[1].slice(1);

    const finale = tAndLSplit[0] + secondCharacterUpper;

    console.log(finale.padEnd(20) + '   ' + like.repeat(i));
    i++;
  }
  // To je to;
  //const textLowerCase = textSplit.toLowerCase();
  //console.log(textLowerCase);

  // const textSplit = textLowerCase.split("/n");
};

button.addEventListener(`click`, convertinCamelCase);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsSplit = flights.split('+');
console.log(flightsSplit);

for (const el of flightsSplit) {
  const elSplit = el.split(';');
  const [type, from, to, time] = el.split(`;`);
  const outputs = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${from.substring(0, 3).toUpperCase()} ${to
    .substring(0, 3)
    .toUpperCase()} (${time.replace(`h`, `:`)})`;

  console.log(outputs);
  //console.log(type.startsWith('Delayed'));
}
