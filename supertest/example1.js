const request = require('supertest');
const express = require('express');
const assert = require('assert');

const app = express();

app.get('/home', function (req, res) {
    var obj = {
        name: 'sushi',
        job: 'Student'
    }
    res.send(obj);
});

// Style 1 ( with no test library)
request(app)
    .get('/home')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '32')
    .expect(200)
    .end(function (err, res) {
        if (err) throw err;
        else {
            // var obj = JSON.parse(res.body);
            // console.log(res.body);
        }
    });

// Style 2 with Mocha
describe('Testing the home endpoint', function () {
    it('should give valid json back', function (done) {
        request(app)
            .get('/home')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '32')
            .expect(200,done)
    });
});

app.listen(8123, function () {
    console.log('server is running.')
})