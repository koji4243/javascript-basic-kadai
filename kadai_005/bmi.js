

let bmi;
let height;
let weight;

function bmiCalc(height, weight) {
    let heightMeter = height / 100;
    let bmi = weight / (heightMeter * heightMeter);
    console.log(bmi);
    return bmi;
}

//　　身長cm　体重kg表記
bmiCalc(172, 78);