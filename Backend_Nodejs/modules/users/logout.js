const connection = require('../connection');
const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    res.setHeader("Set-Cookie", "token=; Max-Age=0; Path=/");
    res.status(204).json({message: "Logout successfully."});
  }

  module.exports = logout;