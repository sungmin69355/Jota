const mysql = require('mysql');
const db_info = {
    host: 'localhost',
    user: 'root', 
    password: 'aa693655', 
    database: 'jota'
}
module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
        });
    }
}