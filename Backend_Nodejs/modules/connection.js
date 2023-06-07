const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "yashika",
    database: "project"
});
connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    
    
    else{
        console.log("Connected");
    }
});
module.exports=connection;

