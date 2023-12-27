const caloriesCounter = getDocmentById('calories-counter');
const budget = getDocmentById('budget');
const newEntry = getDocmentById('new-entry');
let isError = false;
const addEntry = getDocmentById('add-entry');
const calculate = getDocmentById('calculate');
const reset = getDocmentById('reset');

function clearInputString(str) {
    const regex = /[+-\s]/g;
    return regex.replace(str, '');
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return regex.match(str);
}

function addEntry(){
    
}