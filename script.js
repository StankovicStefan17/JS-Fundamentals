'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // console.log(
    //   `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },
  OrderPasta: function (ing1, ing2, ing3) {
    // console.log(
    //   `Here os your declicious pasta with ${ing1},${ing2} and ${ing3}`
    // );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);

    const [...ingredients1] = [mainIngredient, ...otherIngredients];

    console.log(ingredients1);
  },
};

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});
//1)destructuring
//REST

restaurant.orderPizza(`mash`, `onin`, `oliv`, `spince`);

restaurant.orderPizza(`mush`);

const arr1 = [1, 2, ...[3, 4]];

const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , ristoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, ristoto, otherFood);

//Objects

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2)functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};

add(2, 3);
add(5, 4, 6, 7);

const x = [23, 5, 7];
add(...x);

// const arr = [2, 3, 4];

// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// const [, , third, forth] = restaurant.categories;

// console.log(third, forth);

// [second, first] = [first, second];
// console.log(first, second);

// const [main, starter] = restaurant.order(2, 0);
// console.log(main, starter);

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [c, , [b, a]] = nested;
// console.log(c, b, a);

// const [z = 1, s = 1, r = 1] = [9];
// console.log(z, s, r);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, categories, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;

// console.log(menu, starter);

// //mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //nested objects;

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];

// const newGoodArray = [1, 2, ...arr];
// console.log(newGoodArray);

// console.log(...newGoodArray);

// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(newMenu);

// //copyArray

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu1);

// const str = `Stefan`;
// console.log(...str);

// // const ingredients = [
// //   prompt(`Let\'s make pasta!
// // Infredient 1?`),
// //   prompt(`Let\'s make pasta!
// // Infredient 2?`),
// //   prompt(`Let\'s make pasta!
// // Infredient 3?`),
// // ];

// // restaurant.OrderPasta(...ingredients);

// //objects

// const newResturant = { ...restaurant, founder: `Guiseppe` };

// console.log(newResturant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Rist`;

// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// Use ANY date type, return ANY date type, short-circuting
console.log(3 || `Jones`);
console.log(`` || `Jones`);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || `` || `hello` || 23 || null);

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`--------AND--------`);
console.log(0 && `jhonas`);
console.log(7 && `jhonas`);

console.log(`hello` && 23 && null && `jhones`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`,asjrp,`, `mashroum`);
}

restaurant.OrderPasta && restaurant.orderPizza(`,asjrp,`, `mashroum`);
