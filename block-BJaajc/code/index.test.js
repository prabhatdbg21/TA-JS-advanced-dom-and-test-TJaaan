const functions = require('./index');

test(`test getFullName function`, () => {
    expect(functions.getFullName('prabhat', 'kumar')).toBe('prabhat kumar');
    expect(functions.getFullName('ankit', 'kumar')).toBe('ankit kumar');
    expect(functions.getFullName('ravi', 'kumar')).toBe('ravi kumar');
})

test(`test isPalindrome function`, () => {
    expect(functions.isPalindrome(5)).toBe(true);
    expect(functions.isPalindrome(55)).toBe(true);
    expect(functions.isPalindrome(555)).toBe(true);
})

test(`test getCircumFrence function`, () => {
    expect(functions.getCircumFrence(4) ).toBe('The circumference is 25.12');
    expect(functions.getCircumFrence(6) ).toBe('The circumference is 37.68');
    expect(functions.getCircumFrence(8) ).toBe('The circumference is 50.24');
})

test(`test getArea function`, () => {
    expect(functions.getArea(4) ).toBe('The getArea is 50.24');
    expect(functions.getArea(6) ).toBe('The getArea is 113.03999999999999');
    expect(functions.getArea(8) ).toBe('The getArea is 200.96');
    expect(functions.getArea(8) ).toBe('The getArea is 200.96');
})