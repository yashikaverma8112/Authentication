const connection=require('../connection');
const getOne=(req,res)=>{
   const id =req.params.id;
    const sql = 'SELECT * FROM students where id=?';
    connection.query(sql,id ,(error, result) => {
      if (error) {
        console.error( error);
      
      } else {
        res.send(result);
      }
    });
  };

  module.exports = getOne;
