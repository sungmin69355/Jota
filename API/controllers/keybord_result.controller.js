const mysql = require('../../config/database'),
      connection = mysql.init();
mysql.connect(connection);

const result = {
    post_result : async (req, res, next) =>{
        console.log(req.body);
        let body = req.body;
        let q = "SELECT * FROM keybord where purpose = \'" + body.purpose + "\' AND blow = \'"+ body.blow + "\' AND sound = \'"+ body.sound +"\'AND design =\'"+ body.design +"\';";
        return connection.query(q, (err, result) =>{
            console.log(err);
            res.render("result.ejs", {
                data : result
            });
        });
    }
}
module.exports = result;