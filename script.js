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

const displayMovments = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, move) => acc + move);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}€`;
};

const user = `Steven Thomas Williams`; //stw

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
const updateUI = function (acc) {
  // display movements;
  displayMovments(acc.movements);
  //display Balance;
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};
console.log(accounts);

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

const deposit = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawal = movements.filter(mov => mov < 0);
console.log(deposit);
console.log(withdrawal);

//event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Login');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('Login');
    //disply UI and Message
    labelWelcome.textContent = `Welcom back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //ClearInputFIelds:
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('transfer Valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

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

//test data julia [3,5,2,12,7], kate [4,1,15,8]
//test data2 julia [9,16,6,8,3] kate[10,5,6,1,4]

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8];

// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// //test 1
// const arrayCorrected = function (array1, array2) {
//   return array1.slice(1, -2).concat(array2);
// };
// const juliaCopy = julia.slice(1, -2);
// console.log(julia);
// console.log(juliaCopy);

// const JuliaAndKateDataCorrected = arrayCorrected(julia, kate);
// console.log(JuliaAndKateDataCorrected);

// // JuliaAndKateDataCorrected.forEach(function (value, i) {
// //   const textForDog =
// //     value >= 3
// //       ? `Dog number ${i + 1} is an adult, and is ${value} years old`
// //       : `Dog number ${i + 1} is still a puppy 🐶`;
// //   console.log(textForDog);
// // });

// const checkFunction = function (array1, array2) {
//   const correctedArray = arrayCorrected(array1, array2);
//   correctedArray.forEach(function (value, i) {
//     const textForDog =
//       value >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${value} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(textForDog);
//   });
// };

// checkFunction(julia2, kate2);

// //lecture MAP/FILTER/REDUCE
// const eurToUSD = 1.1;

// const moveUSD = movements.map(function (movement) {
//   return movement * eurToUSD;
// });

// const moveUSD1 = movements.map(movement => movement * eurToUSD);

// console.log(moveUSD1);
// // console.log(movements);
// // console.log(moveUSD);

// // const movementsUSDfor = [];
// // for (const move of movements) movementsUSDfor.push(move * eurToUSD);

// const move123 = movements.map(
//   (move, i) =>
//     `Movement ${i + 1}: You ${move > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       move
//     )}`
// );

// console.log(move123);

// const balance = movements.reduce((acc, current) => acc + current, 0);
// console.log(balance);

// const maxValue = movements.reduce((acc, curr) => {
//   acc > curr ? acc : curr, 0;
// });

// console.log(maxValue);

// const testData1 = [5, 2, 4, 1, 15, 8, 3];
// const testData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = function (array) {
//   //1.
//   const dogInHumanAge = array.map(function (curr) {
//     if (curr <= 2) {
//       return curr * 2;
//     } else {
//       return 16 + curr * 4;
//     }
//   });
//   console.log(dogInHumanAge);

//   //2.
//   const excludedDogs = dogInHumanAge.filter(function (dog) {
//     return dog >= 18;
//   });
//   console.log(excludedDogs);

//   //3.
//   const avrageAgeOfDogs = function (array) {
//     const acc = array.reduce(function (acc, dog) {
//       return acc + dog;
//     }, 0);

//     return acc / array.length;
//   };

//   return avrageAgeOfDogs(excludedDogs);
// };

// const calcAverageHumanAge1 = array =>
//   array
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((ukp, age, i, array) => ukp + age / array.length, 0);

// console.log(' ' + calcAverageHumanAge1(testData1));

// console.log(calcAverageHumanAge(testData1));
// console.log(calcAverageHumanAge(testData2));

// const eurToUSD1 = 1.1;
// const totalDepositsUS = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUSD1)
//   .reduce((acc, move) => acc + move, 0);

// console.log(totalDepositsUS);

// const firstWithdrawal = movements.find(move => move < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');

// console.log(account);

///

console.log(movements.includes(-130));

console.log(movements.some(mov => mov > 0));
