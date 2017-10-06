
it('test for mock', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
    
    // With a mock implementation:
    const returnsTrue = jest.fn(() => {
        return 'hello';
    })
    //console.log(returnsTrue()); 
    expect(returnsTrue).toHaveBeenCalled();
})





//import {default as auth} from 'auth.js'
// const auth = require('../../server/src/middlewares/auth.js');
// const { expect } = require('chai');
// const httpMocks = require('node-mocks-http');

// describe('Auth tests', () => {
//     var req = {};
//     var res = {};
//     var next = {};
//     before(function (done) {
//         req = httpMocks.createRequest({
//             method: 'POST',
//             url: '/someurl/home',
//             body: { name: 'sushi', job: 'worker' },
//         });
//         done()
//     })

//     it('should expose default', () => {
//         expect(auth.default).to.be.a('function');
        
//     });
    
//     it('should return a boolean value for wasEverLoggedIn', () => {
//        var value = auth.default(req, res, next);
//     })
// })


Url.parse.mockImplementation(() => (
    { path: 'parsed path' }

));
Url.parse.mockImplementation(() => {
    {
        path: 'parsed path'
    }
})
