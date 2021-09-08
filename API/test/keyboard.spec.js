const request = require('supertest');
const app = require('../../app');

//Uint Test
describe('GET /keyboard', () =>{
    it('return 200 status code', (done) =>{
        request(app)
            .get('/keyboard')
            .expect(200)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            }); 
    })
});

describe('POST /keyboard/result', () =>{
    //아무것도 안보냈을 경우
    it('return 400 status code', (done) =>{
        request(app)
            .post('/keyboard/result')
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
            .post('/keyboard/result')
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