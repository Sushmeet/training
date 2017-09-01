const assert = require('assert');
var request = require('supertest');
var url = 'http://localhost:9901'

request = request(url);

describe('Api tests for /api route', function () {
    it('should call /api endpoint', function (done) {
        request
            .get('/api')
            //.expect('Content-Type', /json/)
            .expect(200)
            .end(function(err,res){
                if (err) return done(err)
                    else {
                        assert.equal(res.body[0].name,'john')
                    //    console.log(JSON.stringify(res.body))
                    //    console.log(res.body)                        
                        done();
                    } 
            })
    })
})