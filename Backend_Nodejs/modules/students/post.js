const con = require('../connection');
const post = (req,res)=>{
        const {name}=req.body;
        const sql='INSERT INTO students(name) values(?)';
        
       
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