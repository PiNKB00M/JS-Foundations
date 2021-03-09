const {
    makeFunctionWithMemory,
    makeVendingMachine
} = require('./coding')

describe('makeFunctionWithMemory', () => {
    it('remembers how many times it has been called', () => {
        const fn = makeFunctionWithMemory()
        expect(fn()).toBe('You have called me 1 time.')
        expect(fn()).toBe('You have called me 2 times.')
        expect(fn()).toBe('You have called me 3 times.')
    })
})

describe('makeVendingMachine', () => {
    it('accepts a nickel', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.nickel()).toBe(5)
    })
    it('accepts a dime', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.dime()).toBe(10)
    })
    it('accepts a quarter', () => {
        const vendingMachine = makeVendingMachine(100)
        expect(vendingMachine.quarter()).toBe(25)
    })
    it('does not allow a purchase until the required amount is deposited', () => {
        const vendingMachine = makeVendingMachine(100)
        vendingMachine.nickel()
        expect(vendingMachine.purchase()).toBe('Please insert 95 cents.')
    })
    it('allows a purchase after the required amount is deposited', () => {
        const vendingMachine = makeVendingMachine(35)
        vendingMachine.nickel()
        vendingMachine.dime()
        vendingMachine.quarter()
        expect(vendingMachine.purchase()).toBe('Here is your orange cola and your change of 5 cents.')
    })
    it('resets the deposited amount after a purchase', () => {
        const vendingMachine = makeVendingMachine(15)
        vendingMachine.quarter()
        vendingMachine.purchase()
        expect(vendingMachine.nickel()).toBe(5)
    })
});
