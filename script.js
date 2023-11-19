'use strict';
/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive :D`);

*/
/*
function logger() {
    console.log(`my name is jonas`);
}

logger();


function frutiProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

frutiProcessor(5, 10);

console.log(frutiProcessor(2, 2));
*/
/*
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(calcAge1(1994));


const cal = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(cal(2005));
*/
/*
const calcAge3 = birthYeah => 2037 - birthYeah;
console.log(calcAge3(1995));

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2038 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(1994, "stefan"));
console.log(yearsUntilRetirement(2000, "avladin"));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function frutiProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);


    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`;
    return juice;
}


console.log(frutiProcessor(2, 2));

*/

/*
const years = new Array(1991, 1985, 2008, 2020);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
friends[1] = 'Mark';
friends[3] = 'Stef';

console.log(friends);

const jonas = ['Jonas', 'Shumnt', '2037-1991', "teacher", friends];

console.log(jonas);


const cal = function (birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const years1 = [1990, 1967, 2002, 2010, 2018];

years1.forEach(element => {
    console.log(cal(element));
});



const ages1 = [cal(years[1]), cal(years[0]), cal(years[2])];
console.log(ages1);
*/


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

friends.push('Jay');
console.log(friends.length);

friends.unshift('jj');
console.log(friends);


const popped = friends.pop();
console.log(friends);


friends.shift();
console.log(friends);
console.log(popped);


console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));



console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


friends.push(23);
console.log(friends.includes('23'));
console.log(friends.includes(23));


if (friends.includes('Peter')) {
    console.log("Imas frenda druze hehe bravo");
}



function CalcTip(bill) {

    if (bill >= 50 && bill <= 300) {
        console.log('prvi if' + bill);
        return bill * 0.15;
    }
    else {
        return bill * 0.20;
    }
}


const Bills = [125, 555, 44];

const Tips = [CalcTip(Bills[0]), CalcTip(Bills[1]), CalcTip(Bills[2])];

const Total = [Bills[0] + Tips[0], Bills[1] + Tips[1], Bills[2] + Tips[2]]


console.log(Bills);
console.log(Tips);
console.log(Total);
