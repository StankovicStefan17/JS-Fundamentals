'use strict';

// console.log(me);
// console.log(job);
// console.log(year);

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1994;

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
