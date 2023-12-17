'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, MainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[MainIndex]];
  },
};

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

//with optinal chaining
// console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);

console.log(restaurant.orderRice?.(0, 1) ?? `Method does not exist`);

const users = [{ name: `jonas`, email: `hello@gj` }];

console.log(users[0]?.name ?? `user array empty`);

if (users.length > 0) console.log(users[0].name);
else console.log(`user array is empty`);

const properties = Object.keys(openingHours);
console.log(properties);
//looping over keys
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days `;
for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//properti Values

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
