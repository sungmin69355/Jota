const mysql = require('../../config/database'),
      connection = mysql.init();
mysql.connect(connection);

const result = {
    post_result : async (req, res, next) =>{
        console.log(req.body);
        return connection.query('SELECT * FROM keybord', (err, result) =>{
            res.render("result.ejs", {
                data : result
                })
        });
    }
}
module.exports = result;