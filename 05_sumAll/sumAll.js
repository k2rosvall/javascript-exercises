const sumAll = function(firstValue, secondValue) {
    let values = Array.from(arguments);
    if (values.some((value) => typeof value != "number" || value < 0 )) return "ERROR";
    
    return firstValue > secondValue ? applyFormula(firstValue) : applyFormula(secondValue);
};

function applyFormula(value) {
    return (value * (value + 1) ) / 2;
}

// Do not edit below this line
module.exports = sumAll;
