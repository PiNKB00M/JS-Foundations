const ProductsService = require('../products-service')

/**
 * The ProductsService provides the following methods that return Promises:
 *   - `getDepartments()`      - the promise resolves to an Array of department objects.
 *   - `getDepartmentById(is)` - the promise resolves to a department object
 *                               or rejects if the department is not found.
 */

/**
 * Directions:
 *   Implement the function below to return a Promise that resolves to an array of department names.
 *     - use the `ProductsService.getDepartments()` method to get an array of department objects
 *     - use `.then` to wait for the promise to resolve and inside the `.then` block
 *       you should use `Array.map` to convert the array of department objects into an array of
 *       department names (strings).
 *     - thus your function should return a promise that resolves to the array of department names.
 *     - HINT: You don't need to use a Promise constructor in your solution.
 *             Using `.then` with the appropriate `return` statements will return a Promise for you.
 */
function getDepartmentNames() {
    return ProductsService.getDepartments().then(departments => {
        return departments.map(d => d.name)
    })
}

/**
 * Directions:
 *   Implement the function below to return a Promise that resolves to the department name
 *   from the specified department id.
 *     - use the `ProductsService.getDepartment(id)` method to get the department object
 *     - use `.then` to return the department's name
 *     - use `.catch` to return a new Error with the message `Department with id ${id} not found.`
 *
 *   Thus your function should return a promise that either resolves to the department name or
 *   rejects with an Error object with the correct message.
 *
 *   HINT: You don't need to use a Promise constructor in your solution.
 *         Using `.then` with the appropriate `return` statements will return a Promise for you.
 */
function getDepartmentNameFromId(id) {
    return ProductsService.getDepartmentById(id)
        .then(department => {
            return department.name
        }).catch(e => {
            throw new Error(`Department with id ${id} not found.`)
        })
}

// You can uncomment the following lines to check your work without using the unit tests.

// getDepartmentNames().then(names => { console.log(names) })       // [ 'Hardware', 'Paint' ]
// getDepartmentNameFromId(2).then(name => { console.log(name) })   // 'Paint'
// getDepartmentNameFromId(3)
//     .then(name => { console.log(name) })
//     .catch(e => console.log(e.message))                          // Department with id 3 not found.


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    getDepartmentNames,
    getDepartmentNameFromId
}
