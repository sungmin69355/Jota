const util = require('../util/util');
const getConnection = require('../../config/database');

const keyboard_model = {
    //키보드 정보를 가져옵니다.
    keyboard_model : async (req, res) =>{
        let body = req;
        const price =  util.prices(req.price);
        let q = "SELECT * FROM keybord where purpose = \'" + body.purpose + "\' AND blow = \'"+ body.blow + "\' AND sound = \'"+ body.sound +"\'AND design =\'"+ body.design +"\' AND " + price +";";
        return keyboard_result(q);
    }
}

module.exports = keyboard_model;

function keyboard_result(q) {
    return new Promise((resolve, reject) => {
        try {
            getConnection((conn) => {
                conn.query(q, (err, keyboard_results) => {
                    if (err) {
                        throw err;
                    }
                    console.log("keyboard_results :", keyboard_results);
                    resolve(keyboard_results);
                });
                conn.release();
            });
        } catch (err) {
            reject(err);
        }
    });
}
