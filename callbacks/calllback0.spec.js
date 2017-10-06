// var myFuncs = require('./callback0.js')

function john() {
   // console.log('john');
    return 'john';
};

function calljohn (callback) {
   return callback();
};

describe('callback', () => {
    it('should call john', (done) => {
      expect (calljohn(john)).toEqual('john')
      done();
    })
})