const { departments, products, cart } = require('./products-data')

const DELAY = 500

const ProductsService = {
    getDepartments: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(departments), DELAY);
        });
    },
    getDepartmentById: function (id) {
        return new Promise((resolve, reject) => {
            const department = departments.find(d => d.id === id)
            if (department) {
                setTimeout(() => resolve(department), DELAY);
            } else {
                setTimeout(() => reject(new Error('Department not found.')), DELAY);
            }
        })
    },
    getProducts: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(products), DELAY);
        });
    },
    getCart: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(cart), DELAY);
        });
    }
}

module.exports = ProductsService
