const sinon = require('sinon');
const expect = require('chai').expect;


describe('App', function() {

    it('should call the spy correctly', function() {
        // the function which is being spied on.
        var callback = sinon.spy();

        // call the spied function with 2  arguments.
        callback('Andrew', 25);

        // assert the function is called once with sinon
        sinon.assert.calledOnce(callback);

        // assert the function to be called using chai. 
        expect(callback.called).to.be.true;

        // check how to see if spy was called with the test data andrew and age 25.
        
    }) 
})

