const connection=require('../connection');
const get=(req,res)=>{
   
    const sql = 'SELECT * FROM students';
    connection.query(sql, (error, result) => {
      if (error) {
        console.error( error);
      
      } else {
        res.send(result);
      }
    });
  }

  module.exports = get;
