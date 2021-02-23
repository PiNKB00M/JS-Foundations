// numbers
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
let evenNumbers = numbers.filter(n => n % 2 === 0);     // TODO: assign to an array containing only the even numbers
let oddNumber = numbers.find(n => n % 2 !== 0);     // TODO: assign to the first odd number
let largestNumber = numbers.reduce((prev, cur) => prev > cur ? prev : cur);// TODO: assign to the largest number
// or let largestNumber = Math.max(...numbers);
console.log('evenNumbers:', evenNumbers);
console.log('oddNumber:', oddNumber);
console.log('largestNumber:', largestNumber);

// strings
const strings = ["this", "is", "a", "collection", "of", "words"];
let onlyIs = strings.filter(s => s.includes('is'));     // TODO: assign to an array with only the string containing the substring `is`
let longestWord = strings.reduce((prev, cur) => prev.length > cur.length ? prev : cur);;    // TODO: assign to the longest word in strings
console.log('onlyIs:', onlyIs);
console.log('longestWord:', longestWord);

// objects
const orders = [
    { price: 45.0, status: "processed" },
    { price: 20.0, status: "pending" },
    { price: 60.0, status: "pending" },
    { price: 15.0, status: "processed" }
];
let allPrices = orders.map(o => o.price);      // TODO: an array with only the price values from all of the orders
let pendingOrders = orders.filter(o => o.status === 'pending');  // TODO: an array containing only the orders that are pending
let total = allPrices.reduce((a, b) => a + b, 0);  // TODO: the total sum of all the prices
console.log('allPrices:', allPrices);
console.log('pendingOrders:', pendingOrders);
console.log('total:', total);