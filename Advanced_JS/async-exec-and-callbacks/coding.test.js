const {
    printAllDepartmentNames,
    printDepartmentName
} = require('./coding')

jest.useFakeTimers()

describe('printAllDepartmentNames', () => {
    it('prints an array of department names', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => { })
        printAllDepartmentNames()
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith(["Hardware", "Paint"])
        spy.mockRestore()
    })
})

describe('printDepartmentName', () => {
    it('returns a Promise that when given a correct department id, resolves to the department name', () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => { })
        printDepartmentName(2)
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith('Paint')
        spy.mockRestore()
    })
    it('returns a Promise that when given an incorrect department id, rejects to an error object', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation(() => { })
        printDepartmentName(3)
        jest.runAllTimers()
        expect(spy).toHaveBeenCalledTimes(1)
        expect(spy).toHaveBeenLastCalledWith('Department with id 3 not found.')
        spy.mockRestore()



    })
})
