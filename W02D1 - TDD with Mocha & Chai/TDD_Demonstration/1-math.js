
const addTwoNumbers = (num1, num2) => {
    if(typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "Values cannot be added because one or both of them are not numbers.";
    }
    return num1 + num2;
}

const addNumbersInArray = (numbers) => {
    if(! Array.isArray(numbers)){
        return "Please send an array as argument.";
    }
    let sum = 0;
    for(let i = 0; i < numbers.length; i ++){
        sum += numbers[i];
    }
    return sum;
}

const isOdd = (num) => {
    if(!Number.isInteger(num)){
        return null;
    }
    if(num % 2 === 1){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    addTwoNumbers,
    addNumbersInArray,
    isOdd
}