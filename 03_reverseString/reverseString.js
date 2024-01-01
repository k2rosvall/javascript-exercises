const reverseString = function(str) {
    let words = str.split(' ');
    let reversedString = words.map((word) => word.split('').reverse().join("")).reverse().join(" ")

    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
