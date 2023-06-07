const connection = require('../connection');
const Logger =(req,res,next)=>{
   const url=req.url;
   const method=  req.method;
   const address=req.socket.remoteAddress;
   const sql='Insert into logs (url,method,address) values(?,?,?)';
   connection.query(sql, [url, method, address], (error, results) => {
    if (error) {
      console.error(error);
    } else {
        console.log("success")
    }
  });

    next();
}

module.exports = Logger;