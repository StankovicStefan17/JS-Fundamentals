'use strict';

// //zaostatak

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();

// f();
// h();
// f();

// console.dir(f);

// //example2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`there are 3 groups, each with ${perGroup} passangers`);
//   }, wait * 1000);

//   console.log(`will start boarding in ${wait} seconds`);
// };
// const perGroup = 1000;
// boardPassengers(180, 3);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(3, 4));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, -1));
// console.log(arr.slice());
// console.log(arr.slice([...arr]));

// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// arr.splice();

// console.log(arr.reverse());
// console.log(arr);

// const arr2 = arr;
// const letters = arr.concat(arr2);

// console.log(letters);

// ///join
// console.log(letters.join('-'));

// const arr23 = [23, 11, 43];
// console.log(arr23[0]);
// console.log(arr23.at(0));

// console.log(arr23[arr23.length - 1]);
// console.log(arr23.slice(-1));

// console.log(arr23.at(-1));
// console.log('arr23'.at(-1));

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------');
// movements.forEach(function (movement1, i) {
//   if (movement1 > 0) {
//     console.log(`${i}: You deposited ${movement1}`);
//   } else {
//     console.log(`${i}: you withdrew ${Math.abs(movement1)}`);
//   }
// });

// currencies.forEach(function (value, key, map) {
//   console.log(value, key, map);
// });

// const currenciesUniq = new Set(['USD', 'GBP', 'USD', 'EUR']);
// currenciesUniq.forEach(function (value, key, map) {
//   console.log(value, key, map);
// });

//start of BANKIST app
