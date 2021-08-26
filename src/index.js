
const express = require("express");
const app = express();
const morgan = require("morgan");
const { route } = require("./routes");
require('dotenv').config();

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// console.log(process.env.KEY);
app.use((req, res, next) => {
  const {key} = req.query;
  
  if(key==process.env.KEY){
        next();
  }else{
        res.status(403).json({ error: "this key invalid" });
    } 
  });

//routes
// app.use(require("./routes/index"));
app.use("/api/weather", require("./routes/weather"));
app.use("/api/users", require("./routes/users"));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});