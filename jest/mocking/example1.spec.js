//The simplest way to create a Mock Function instance is with jest.fn().


describe('Mocking', () => {
    test('mock functions with jest.fn', () => {
        const mock = jest.fn()

        const result = mock('foo')

        expect(result).toBe(undefined)
        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveBeenCalledWith('foo')
    })
})