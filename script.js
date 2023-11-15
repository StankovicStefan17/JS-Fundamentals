
/*
//mark
const markHeight = 1.90; //cm
const markMass = 99; //kg

//John 

const johnHeight = 1.95; //cm
const johnMass = 92; //kg

let markHigherBMI = false;


let markBMI;
let jhonBMI;

function BMICalculator(height, mass) {
    let BMI;

    BMI = mass / height ** 2;

    return BMI;
}

markBMI = BMICalculator(markHeight, markMass);
jhonBMI = BMICalculator(johnHeight, johnMass);

if (markBMI > jhonBMI)
    console.log(`Mark's BMI is higher than John's and his BMI is:  + ${markBMI} + " Jhon BMI is " + ${jhonBMI}`);
else
    console.log(`John's BMI is higher than Mark's!  Jhon BMI: " + ${jhonBMI} + " Mark BMI is " + ${markBMI}`);


console.log("Is marke have higher BMI: " + markHigherBMI);


//type conversion;
const inputYear = '100';
console.log(Number(inputYear) + 180);

//type coercion
console.log("i am " + 23 + " years old");
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;

console.log(n);



const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarha can start driving license🐱‍🚀")
}
else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. Wait for ${yearsLeft} years`);
}
*/
/*
const age = 18
if (age === 18) console.log(`You just became an adult :D`)
*/
/*
const favorite = Number(prompt("What's your favourite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log(`Cool! 23 is amazing number!`)
} else if (favorite == 7) {
    console.log(`7 is cool number`)
}

if (favorite !== 23) {
    console.log("nije 23");
}
*/
// Coding Challenge #3 Task 1,2,3,4

const DolphinsFirstScore = 97;
const DolphinsSecondScore = 112;
const DolphinsThirdScore = 101;



const KoalasFirstScore = 109;
const KoalasSecondScore = 95;
const KoalasThirdScore = 106;

const DolphinsAvrageScore = (DolphinsFirstScore + DolphinsSecondScore + DolphinsThirdScore) / 3

const KoalasAvrageScore = (KoalasFirstScore + KoalasSecondScore + KoalasThirdScore) / 3

/* //task 1,2
if (DolphinsAvrageScore > KoalasAvrageScore) {
    console.log(`Dolphins wins with avarage score ${DolphinsAvrageScore}`);
} else if (KoalasAvrageScore > DolphinsAvrageScore) {
    console.log(`Koalas wins with avarage score ${KoalasAvrageScore}`);
}
else {
    console.log(`It's draw both teams have same score: ${KoalasAvrageScore}`);
}
*/

// //taks
// if (DolphinsAvrageScore > KoalasAvrageScore && DolphinsAvrageScore >= 100) {
//     console.log(`Dolphins wins with avarage score ${DolphinsAvrageScore}`);
// } else if (KoalasAvrageScore > DolphinsAvrageScore && KoalasAvrageScore >= 100) {
//     console.log(`Koalas wins with avarage score ${KoalasAvrageScore}`);
// }
// else if (KoalasAvrageScore === DolphinsAvrageScore && KoalasAvrageScore >= 100) {
//     console.log(`It's draw both teams have same score: ${KoalasAvrageScore}`);
// }
// else {
//     console.log(`No team wins the tophy`);
// }

const age = 23;
age >= 50 ? console.log(`i like to drink wine 🎉`) : console.log(`i like to drink wine 🎂`);


const drink = age >= 18 ? `wine` : `water`;
console.log(drink);