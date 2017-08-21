var assert = require('assert');
var authController = require('../controllers/auth.controller');

describe('AuthController', function () {
    describe('isAuthorized', function () {

        it('should return false if not authorized', function () {
            authController.setUserRole(['user']);
            assert.equal(false, authController.isAuthorized('admin'))
        })

        it('should return true if authorized', function () {
            authController.setUserRole(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'))
        })
    })

    describe('isAuthorizedAsync', function () {

        it('should return false if not authorized', function (done) {
            //this.timeout(2500);
            authController.setUserRole(['user']);
            authController.isAuthorizedAsync('admin',
            function (isAuth) {
                assert.equal(false, isAuth);
                done();
            });
        })

        it('should return true if not authorized', function (done) {
            authController.isAuthorizedAsync(['user', 'admin'], 'admin', function (isAuth) {
                assert.equal(true, isAuth);
                done();
            })
        })
    })
})