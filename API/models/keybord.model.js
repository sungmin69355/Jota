const mysql = require('../../config/database'),
      connection = mysql.init();
mysql.connect(connection);

const keybord_model = {
    //키보드 정보를 가져옵니다.
    keybord_model : async (req, res) =>{
        let body = req;
        let q = "SELECT * FROM keybord where purpose = \'" + body.purpose + "\' AND blow = \'"+ body.blow + "\' AND sound = \'"+ body.sound +"\'AND design =\'"+ body.design +"\';";
    
        connection.query(q, function(err, result) {
            if (err) {
                throw err;
            }
            return result;
        });
    }
}
module.exports = keybord_model;