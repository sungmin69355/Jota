const assert = require('assert');
const { request } = require('http');
const supertest = require('supertest');
const app = require('../../app');

describe('GET /keybord', () =>{
    it('return 200 status code', (done) =>{
        request(app)
            .get('/keybord')
            .expect(304)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    })
})
module.exports = app;