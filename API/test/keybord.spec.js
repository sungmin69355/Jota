const request = require('supertest');
const app = require('../../app');

//Uint Test
describe('GET /keybord', () =>{
    it('return 200 status code', (done) =>{
        request(app)
            .get('/keybord')
            .expect(200)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    })
});

describe('POST /keybord/result', () =>{
    //아무것도 안보냈을 경우
    it('return 400 status code', (done) =>{
        request(app)
            .post('/keybord/result')
            .expect(400)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    });
    //올바르게 값을 다 넣었을 경우
    it('return 200 status code ', (done) =>{
        request(app)
            .post('/keybord/result')
            .send({
                identity: 'student',
                purpose: 'coding',
                blow: 'little',
                sound: 'No_noise',
                design: 'fancy',
                price: 'ten'
            })
            .expect(200)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    });
});

module.exports = app;