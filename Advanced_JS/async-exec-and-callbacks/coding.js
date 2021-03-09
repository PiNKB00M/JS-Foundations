const ProductsServiceWithCallbacks = require('../products-service-with-callbacks')

/**
 * ProductsServiceWithCallbacks provides the following methods that each take a callback (`cb`) function:
 *   - `getDepartments(cb)`             - calls the `cb` function with the Array of department objects.
 *   - `getDepartmentById(id, cb, err)` - calls the `cb` function with the department object
 *                                        or calls the `err` function if the department is not found.
 */

/**
 * Directions:
 *   Implement the function below to print the department names.
 *     - use the `ProductsServiceWithCallbacks.getDepartments(cb)` method to get an array of
 *       department objects.
 *     - pass into that method a callback that does the following:
 *         - uses `Array.map` to convert the array of departments (objects) into an array of
 *           department names (strings).
 *         - uses `console.log` to print the array of department names - i.e. `["Hardware", "Paint"]`.
 *           Don't try to loop over the Array of names, just `console.log` the array.
 */
function printAllDepartmentNames() {
    ProductsServiceWithCallbacks.getDepartments(departments => {
        const departmentNames = departments.map(d => d.name)
        console.log(departmentNames)
    })
}

/**
 * Directions:
 *   Implement the function below to return the department name from the specified department id.
 *     - use the `ProductsServiceWithCallbacks.getDepartment(id, cb, err)` method to get the
 *       department object
 *     - pass into that method 2 callbacks, one for success and one for error
 *     - for the success callback pass in a function that uses `console.log` to print the department
 *       name
 *     - for the error callback pass in a function that uses `console.error` to print the following
 *       error message: `Department with id ${id} not found.`
 *   Thus your function should either `console.log` the department name or `console.error` the correct
 *   error message.
*/
function printDepartmentName(id) {
    ProductsServiceWithCallbacks.getDepartmentById(
        id,
        department => {
            console.log(department.name)
        },
        error => {
            console.error(`Department with id ${id} not found.`)
        }
    )
}

// You can uncomment the following lines to check your work without using the unit tests.

// printAllDepartmentNames()       // [ 'Hardware', 'Paint' ]
// printDepartmentName(2)          // 'Paint'
// printDepartmentName(3)          // Department with id 3 not found.


// DON'T CHANGE ANYTHING BELOW THIS LINE

module.exports = {
    printAllDepartmentNames,
    printDepartmentName
}
