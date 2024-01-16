const express = require("express");
require('./DB/Db.config')

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to esparkinfo application." });
  });

//   const userModel = require('./Model/UserModel');
//   const model = {};
//   model.user = userModel;
//   module.exports = model;


app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });