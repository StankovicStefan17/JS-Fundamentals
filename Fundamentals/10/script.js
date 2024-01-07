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

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const gereeterHey = greet('Hey');
// gereeterHey('Jhonas');
// gereeterHey('JhonasStefan');

// greet('Hello')('jonas');

// const greet1 = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// greet1('ola')('Pablo');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(23, 'Jonas');
// lufthansa.book(25, 'Stefan');

// const book = lufthansa.book;
// const eruowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// //book(23, 'SarahaWiliasm');
// //call
// book.call(eruowings, 23, 'saraha');
// book.call(lufthansa, 239, 'Mary cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 523, 'Stef');

// //applay method
// const flightData = [583, 'SD'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// // Bind method
// const bookEW = book.bind(eruowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(25, 'steven');

// const bookEW23 = book.bind(eruowings);
// bookEW23(26, 'St');

// //With Event Listeners
// lufthansa.plane = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.plane++;
//   console.log(this.plane);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTax1 = value => rate => value + value * rate;

// const addVAT1Bind = addTax1(0.23);
// console.log(addVAT1Bind(100));

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
