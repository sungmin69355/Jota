const mysql = require('mysql');
const db_info = {
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b3342222cb8610', 
    password: '89729865', 
    database: 'heroku_0628ed843dc8462',
    connectionLimit: '200'
}

let pool = mysql.createPool(db_info);

function getConnection(callback) {
    pool.getConnection(function (err, conn) {
      if(!err) {
        callback(conn);
      }
    });
}
  
module.exports = getConnection;