const connection = require('../connection');
const jwt = require("jsonwebtoken");

const Auth = (req, res, next) =>{
    const url = req.url;
    if(url.indexOf('students') == -1){
      return next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "secret-key");
      const sql = "SELECT count(*) AS cnt FROM users WHERE Username = '" + decoded.username + "'";

      connection.query(sql, (error, results) => {
        if (error) {
          return res.status(403).json({message:"Unauthorised!!!"});
        } else {
          let count = JSON.parse(JSON.stringify(results))[0].cnt;
          if(count == 1){
            return next();
          }
          else{
            return res.status(403).json({message:"Unauthorised!!!"});
          }
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(403).json({message:"Unauthorised!!!"});
    }
}

module.exports = Auth;