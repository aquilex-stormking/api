const express = require("express");
const app = express();
const morgan = require("morgan");
const { route } = require("./routes");
const key1 = "$2b$10$a5wk2P4SCqiyJI3txonFd.otYX7iM8SguharNVNU9EMPKgv6XjCXa";

//settings

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
  const {key} = req.query.key;
  if(key==key1){
        next();
  }else{
        res.status(403).json({ error: "this key invalid" });
    } 
  });

//routes
app.use(require("./routes/index"));
app.use("/api/weather", require("./routes/weather"));
app.use("/api/users", require("./routes/users"));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
