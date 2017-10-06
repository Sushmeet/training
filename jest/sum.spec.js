const sum = require('./sum');

describe('Operation' , () => {
    it('should add two numbers', () => {
      var result =  sum(4,5);
        expect(result).toEqual(9);
    })
})

// describe('Asynchronous', () => {
//     it('should be peanut butter', () => {
//         expect(fetchdata(callback)).toEqual('peanut');
//     });
// })


