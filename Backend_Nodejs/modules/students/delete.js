const connection=require('../connection');
const Delete=(req,res)=>{
      const id =req.params.id;
      const{name}=req.body;
      const sql='DELETE FROM students where id=?';
        con.query(sql, id, (error, result) => {
        if(error) {
          res.status(500).send('error');
        }
        else{
           
           res.send(result);
        }
      })};
      module.exports=Delete;   
   