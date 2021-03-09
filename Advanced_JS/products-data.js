const data = {
    departments: [
        { id: 1, name: 'Hardware' },
        { id: 2, name: 'Paint' }
    ],
    products: [
        {
            id: 1,
            departmentId: 1,
            name: '16 oz. Fiberglass Handle Hammer',
            brand: 'HDX',
            price: 697,
            rating: 4.8,
            onSale: true,
            quantityInStock: 12
        },
        {
            id: 2,
            departmentId: 1,
            name: '16 oz. Rubber Mallet',
            brand: 'HDX',
            price: 547,
            rating: 4.5,
            onSale: false,
            quantityInStock: 32
        },
        {
            id: 3,
            departmentId: 2,
            name: 'Premium Plus Ultra Pure White Paint',
            brand: 'BEHR',
            price: 3198,
            rating: 4.5,
            onSale: false,
            quantityInStock: 3
        },
        {
            id: 4,
            departmentId: 2,
            name: 'FLEXiO 3000 HVLP Paint Sprayer',
            brand: 'Wagner',
            rating: 4,
            onSale: true,
            quantityInStock: 1
        }
    ],
    cart: [
        {
            id: 1,
            productId: 1,
            departmentId: 1,
            name: '16 oz. Fiberglass Handle Hammer',
            brand: 'HDX',
            price: 697,
            rating: 4.8,
            quantity: 1,
        },
        {
            id: 2,
            productId: 2,
            departmentId: 1,
            name: '16 oz. Rubber Mallet',
            brand: 'HDX',
            price: 547,
            rating: 4.5,
            quantity: 3,
        }
    ]
}

module.exports = data;