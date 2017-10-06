const express = require('express');
const request = require('supertest');

describe('app.all()', () => {
    let app;
    beforeEach(() => {
        app = express();
    })
    it('it should add a router per method', () => {
        // use the method in question
        // then test it out
        app.all('/sushi', (req, res, next) => {
            res.end(req.method);
        })

        request(app)
        .post('/sushi')
        .expect('Post')
    })
})

    
