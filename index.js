let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let btn = document.querySelector('.btn');
let result = document.querySelector('.bmi-result');
let category = document.querySelector(".category")
let bmi 

btn.addEventListener('click', ()=>{
    let heightVal = height.value;
    let weightVal = weight.value;
     bmi = weightVal/(heightVal*heightVal)
   
    result.textContent = bmi
    category.textContent = assignCategory()
})

const assignCategory = ()=>{
    if(bmi < 18.5){
        return 'Underweight'
    }
    else if(bmi >= 18.5 && bmi <= 24.9 ){
        return 'Healthy'
    }
    else if(bmi >=25  && bmi <= 29.9 ){
        return 'Overweight'
    }
    else if(bmi > 30 ){
        return 'Obesity'
    }
}