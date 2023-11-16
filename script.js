'use strict';
/*
let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`i can drive :D`);

*/

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
