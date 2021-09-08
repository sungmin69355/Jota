const util = require('../../API/util/util');
const mysql = require('../../config/database'),
      connection = mysql.init();
mysql.connect(connection);

const keybord_model = {
    //키보드 정보를 가져옵니다.
    keybord_model : async (req, res) =>{
        let body = req;
        const price =  util.prices(req.price);
        let q = "SELECT * FROM keybord where purpose = \'" + body.purpose + "\' AND blow = \'"+ body.blow + "\' AND sound = \'"+ body.sound +"\'AND design =\'"+ body.design +"\' AND " + price +";";
        return keybord_result(q);
    }
}

module.exports = keybord_model;

function keybord_result(q) {
    return new Promise((resolve, reject) => {
        try {
            connection.query(q, (err, keybord_results) => {
                if (err) {
                    throw err;
                }
                console.log("keybord_results :", keybord_results);
                resolve(keybord_results);
            });
        } catch (err) {
            reject(err);
        }
    });
}
