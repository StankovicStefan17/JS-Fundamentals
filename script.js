'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking(`LH123`);
// createBooking(`LH123`, 2);
// createBooking(`LH123`, 5);
// createBooking(`LH123`, undefined, 50);
// createBooking(`LH123`, 2, 50);

// const flight = 'LH234';

// const jonas = {
//   name: 'jonas Schmedetmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'Lh999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// // checkIn(flight, jonas);

// // console.log(flight);
// // console.log(jonas);

// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, ''.toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(fn(str));
//   console.log(`transfomerd by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('');
// };

// console.log(['Jonas', 'martha', 'adam'].forEach(upperFirstWord));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const gereeterHey = greet('Hey');
gereeterHey('Jhonas');
gereeterHey('JhonasStefan');

greet('Hello')('jonas');

const greet1 = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greet1('ola')('Pablo');
