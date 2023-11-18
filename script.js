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