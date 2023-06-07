const con = require('../connection');
const post = (req,res)=>{
     
        
        const{username,password}=req.body;
        
        const sql='INSERT INTO users (username,password) values(?,?)';
        con.query(sql,[username,password], (error,result)=> {
            if(error) {
                res.status(500).send(error);
            }
            else{
                res.send(result);
    
            }
        });
    };
    module.exports=post;