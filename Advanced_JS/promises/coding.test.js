const {
    getDepartmentNames,
    getDepartmentNameFromId
} = require('./coding')

describe('getDepartmentNames', () => {
    it('returns a Promise that resolves to an array of department names', () => {
        expect.assertions(1)
        return getDepartmentNames().then(names => expect(names).toStrictEqual(['Hardware', 'Paint']));
    })
})

describe('getDepartmentNameFromId', () => {
    it('returns a Promise that when given a correct department id, resolves to the department name', () => {
        expect.assertions(1)
        return getDepartmentNameFromId(2).then(names => expect(names).toBe('Paint'));
    })
    it('returns a Promise that when given an incorrect department id, rejects to an error object', () => {
        expect.assertions(1)
        return expect(getDepartmentNameFromId(3)).rejects.toEqual(
            new Error('Department with id 3 not found.')
        )
    })
})
