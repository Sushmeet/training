const expect = require('chai').expect;

describe('.not', function () {

    it('assertions show here', function () {
        expect(function () {}).to.not.throw();
        expect({a: 1}).to.not.have.property('b');
        expect([1, 2]).to.be.an('array');
        expect({}).to.be.an('object');
        expect([1, 2]).to.be.an('array').that.does.not.include(3);
    })
})

