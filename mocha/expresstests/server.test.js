const request = require('supertest');
const expect = require('chai').expect;

var app = require('./server').app;

describe('Server', function () {

    describe('GET /', function () {

        it('should return hello world response', function (done) {
            request(app)
                .get('/')
                .expect('hi')
                .expect(200)
                .end(done);
        });
    })

    describe('GET /home', function () {
        
        it('should return home response', function (done) {
            request(app)
                .get('/home')
                .expect(200)
                .expect(function (res) {
                    expect(res.body).to.deep.own.include({
                        name: 'Sushi',
                        age: 10
                    })
                })
                .end(done);
        })
    })

})