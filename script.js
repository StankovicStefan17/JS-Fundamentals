
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
