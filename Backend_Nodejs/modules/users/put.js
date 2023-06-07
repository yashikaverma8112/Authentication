const con = require('../connection');
const put = (req,res)=>{
     
        
        const{username}=req.params;
        const{password}=req.body;
        
        const sql= 'UPDATE users  set password =? where username = ?';
        con.query(sql,[password,username], (error,result)=> {
            if(error) {
                res.status(500).send(error);
            }
            else{
                res.send(result);
    
            }
        });
    };
    module.exports=put;