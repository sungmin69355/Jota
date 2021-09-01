const fs = require('fs');
const ejs = require('ejs');
const mysql = require('../../config/database'),
      connection = mysql.init();
mysql.connect(connection);

const result = {
    post_result : async (req, res, next) =>{
        console.log(req.body);
        fs.readFile('../jota/views/result.ejs', 'utf8', (err, data) => {
            return connection.query('SELECT * FROM keybord', (err, result) =>{
                res.send(ejs.render(data, {
                    data: result
                  }))
            });
        })
    }
}
module.exports = result;