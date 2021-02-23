function count(arr, callback) {
    // TODO: calculate and return the number of values in arr
    // that when passed to the callback function, evaluate to `true`.
    let count = 0;
    arr.forEach(function(i){
        callback(i) ? count ++ : count
        // if(callback(i)){count++}
    })
    return count;
}

const numbers = [1, 2, -3, 4, 5, -6, 7, 8];

const evens = count(numbers, n => n % 2 === 0);
console.log('evens:', evens);

const negatives = count(numbers, n => n < 0);
console.log('negatives:', negatives);

const fruit = ['apple', 'orange', 'apple', 'banana', 'kiwi', 'apple'];
const apples = count(fruit, f => f === 'apple');
console.log('apples:', apples);