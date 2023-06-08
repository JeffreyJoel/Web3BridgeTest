let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let btn = document.querySelector('.btn');
let result = document.querySelector('.bmi-result');
let category = document.querySelector(".category");
let error = document.querySelector('.error');
let bmi



const calculateBMI = () => {
    let heightVal = height.value;
    let weightVal = weight.value;
    bmi = weightVal / (heightVal * heightVal)

    if (heightVal.length < 1 || weightVal.length < 1) {
        error.textContent = 'Error: You have to enter values for height and weight!'
    }
    else {
        result.textContent = bmi
        category.textContent = ` Category: ${assignCategory()}`
    }
}

const assignCategory = () => {
    if (bmi < 18.5) {
        return 'Underweight'
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal'
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight'
    }
    else if (bmi > 30) {
        return 'Obese'
    }
}

let clearError = () => {
    error.textContent = ''
}
height.addEventListener('focus', clearError);
weight.addEventListener('focus', clearError);

btn.addEventListener('click', calculateBMI)