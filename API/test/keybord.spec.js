const request = require('supertest');
const app = require('../../app');

describe('GET /keybord', () =>{
    it('return 200 status code', (done) =>{
        request(app)
            .get('/keybord')
            .expect(200)
            .end((err, res) =>{
                if(err){
                    throw err;s
                }
                done();
            });
    })
})
module.exports = app;