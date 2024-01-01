const leapYears = function(year) {
    let condition1 = year % 4 === 0 && year % 100 != 0;
    let condition2 = year % 4 === 0 && year % 100 === 0 && year % 400 === 0;

    return condition1 || condition2 ? true : false
};

// Do not edit below this line
module.exports = leapYears;
