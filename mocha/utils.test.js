const utils = require('./utils');
const assert = require('assert');
const expect = require('chai').expect;

describe('Utils', function () {
    describe('#add', function () {
        it('two numbers', function () {
            var result = utils.add(4, 5);
            if (result != 9) {
                throw new Error('Expected value was 9 but got ' + result + ' instead');
            }
        });

        it('add two numbers asynchronously', function (done) {
            utils.asycnAdd(4, 5, (sum) => {
                expect(sum).to.equal(9);
                done();
            });
        });
    })

    describe('#multiply', function () {

        it('should multiply two numbers', function () {
            var result1 = utils.square(2);
            var result2 = utils.square(-3);
            var result3 = utils.square(1);

            // assert.equal(result1, 4)
            expect(result1).to.equal(4);
            assert.equal(result2, 9);
            assert.equal(result3, 1);
        });

        it('should multiply 2 numbers aysnc', function (done) {
            utils.asyncMultiply(2, 4, function (product) {
                expect(product).to.equal(8);
                done();
            });
        })

    })

    describe('#setName', function () {
        it('should verify first and last names are set', function () {
            var user = {
                language: 'english',
                size: 'small'
            };
            var fullName = 'Rocky Balboa';
            var updatedUser = utils.setName(user, fullName)
            expect(updatedUser).to.be.an('object');
            expect(updatedUser).to.deep.own.include({
                firstName: 'Rocky',
                lastName: 'Balboa'
            });
        });
    })
})