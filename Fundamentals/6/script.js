'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1994;
/*
console.log(this);

const birthYear = 5;

const calcAge = birthYear => {
  const birthYear1 = this.birthYear;
  console.log(`in function ${birthYear1}`);
};

calcAge(10);

const jonas = {
  year: 1994,
  cacl: function (year) {
    console.log(year);
    console.log(this.year);
  },
};

jonas.cacl(10);

const matilda = {
  year: 2017,
};

matilda.cacl = jonas.cacl;
matilda.cacl();

const addExp = function (a, b) {
  console.log(arguments);
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
};

console.log(addExp(2, 6, 5, 10, 5, 9, 8, 20, 5));

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
*/
/*
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const merriedJessica = jessica;
merriedJessica.lastName = `Davis`;

// console.log(`before marrage:`, jessica);
// console.log(`after marrage:`, merriedJessica);

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`alice`, `katrin`],
};

const jessica3 = Object.assign({}, jessica2);

jessica3.lastName = `Avci`;

console.log(`before marrage:`, jessica2);
console.log(`after marrage:`, jessica3);

jessica3.family.push(`avi`);
jessica3.family.push(`oldi`);
*/
