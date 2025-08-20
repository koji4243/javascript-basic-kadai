

let bmi = 55;
let height = 172;
let weight = 72;

function bmiCalc() {
    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);
    console.log(bmi);
    return bmi;
}


bmiCalc();