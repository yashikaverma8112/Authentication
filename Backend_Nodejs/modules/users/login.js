const connection = require('../connection');
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    
    const { username, password } = req.body;
    const sql = 'SELECT COUNT(*) as cnt FROM users WHERE username = ? AND password = ?';
    connection.query(sql, [username, password], (error, result) => {
        if(error){
            console.log(error);
        }
        else{
                   let count=JSON.parse(JSON.stringify(result))[0].cnt;
                console.log(count);
                if(count==1){
                    // generate token
                    const token=jwt.sign({username:username},"secret-key",{expiresIn:"24h"});
                    res.status(200).send({"token":token});
                
                   
                }
                else{

                    res.status(403).json({message:"Unauthorized"});
                }
               }
    });
}
  module.exports = login;