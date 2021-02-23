function validate(num) {
    if (typeof (num) !== 'number') {
        throw new TypeError(`The value ${num} is not a number`);
    }
    console.log(`The value ${num} is valid.`);
}

// TODO: The program exits when it encounters the 'banana' value.
//       Add a try / catch so that all values are validated.
// HINT: Where you place the try...catch is important.
// HINT: In the catch block, only log the error's message property.
const numbers = [1, 2, 'banana', 4, 'orange', 5];
numbers.forEach(function (val) {
    try {
        validate(val);
    } catch (err) {
        console.log(`${err.message}`);
    }
});