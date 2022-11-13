let elementsArray = document.querySelectorAll('.value-btn');
let resultElement = document.querySelector('#result');
let calculateElement = document.querySelector('#calculate');
const textInputElement = document.querySelector('#text-input');

let valueText = '';
let result = 0;

const addValue = (value = 0) => {
  result += value;
  
  if (!valueText) {
    valueText = `${value}`;
  } else {
    valueText = `${valueText} + ${value}`;
  }  
  textInputElement.value = valueText;
}

elementsArray.forEach((element) => {
  element.addEventListener('click', (e) => {
    const value = +e.target.innerText;
    console.log(e);
    console.log('value', value);
    addValue(value);
  })
});

calculateElement.addEventListener('click', () => {
  resultElement.innerHTML = result;
  result = 0;
  valueText = '';
});




