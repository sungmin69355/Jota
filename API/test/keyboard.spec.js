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
    it('If you dont do anything', (done) =>{
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
    it('If you put all the values in correctly', (done) =>{
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
    //값이 몇 개 없을 경우
    it('If you dont have it, value', (done) =>{
        request(app)
            .post('/keyboard/result')
            .send({
                //identity: 'student',
                purpose: 'coding',
                //blow: 'little',
                sound: 'No_noise',
                //design: 'fancy',
                //price: 'ten'
            })
            .expect(400)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    });    
    //값을 잘못 입력 했을 경우
    it('If you input error', (done) =>{
        request(app)
            .post('/keyboard/result')
            .send({
                test:"sadkasmd",
                name:"popop1234",
                error:"4040"
            })
            .expect(400)
            .end((err, res) =>{
                if(err){
                    throw err;
                }
                done();
            });
    });
});

module.exports = app;