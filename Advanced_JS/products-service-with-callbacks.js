const { departments, products, cart } = require('./products-data')

const DELAY = 500

const ProductsServiceWithCallbacks = {
    getDepartments: function (cb) {
        setTimeout(() => cb(departments), DELAY);
    },
    getDepartmentById: function (id, cb, err) {
        const department = departments.find(d => d.id === id)
        if (department) {
            setTimeout(() => cb(department), DELAY);
        } else {
            setTimeout(() => err(new Error('Department not found.')), DELAY);
        }
    },
    getProducts: function (cb) {
        setTimeout(() => cb(products), DELAY);
    },
    getCart: function (cb) {
        setTimeout(() => cb(cart), DELAY);
    }
}

module.exports = ProductsServiceWithCallbacks
