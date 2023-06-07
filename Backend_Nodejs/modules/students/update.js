const con=require('../connection');
const update=(req,res)=>{
    const { id } = req.params;
    const { name } = req.body;
      const sql=`UPDATE students set name=?  where id=?`;
        con.query(sql, [name,id], (error, result) => {
        if(error) {
          res.status(500).send(error);
        }
        else{
           
           res.send(result);
        }
      })};
      module.exports=update;   