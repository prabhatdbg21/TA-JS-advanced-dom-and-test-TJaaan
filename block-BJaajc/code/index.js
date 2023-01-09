function getFullName(firstName, lastName) {
    fullName = `${firstName} ${lastName}`;
    return fullName;
}

function isPalindrome(value) {
    let num = value.toString();
    // find the length of a value
    const len = num.length;

    // loop through half of the value
    for (let i = 0; i < len / 2; i++) {
    
        // check if first and last string are same
        if (num[i] !== num[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function getCircumFrence(radius) {
    const pi = 3.14
    return `The circumference is ${2 * pi * radius}`
}

function getArea(radius) {
    const pi = 3.14
    return `The getArea is ${pi * radius * radius}`
}

module.exports = {
    getFullName,
    isPalindrome,
    getCircumFrence,
    getArea,
};