

let bmi = null;
let height = 1.7;
let weight = 68;

function bmiCalc() {
    let bmi = weight / (height * height);
    console.log(bmi);
    return bmi;
}


bmiCalc();