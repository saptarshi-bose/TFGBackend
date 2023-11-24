const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const indexrts = require("./routes/index.router");
const databaseObj = require("./common/dbConnection");
const rabbitObj = require("./common/rabbitProvider");

const app = express();
app.use(bodyParser.json()); // registering this middleware for accepting json requests

app.use("/api", indexrts); // All route must precees with this path

setTimeout(() => {
  databaseObj.createDbConnection().then(() => {
    rabbitObj.connectRabbitMQ().then(() => {
      app.listen(process.env.PORT, () => {
        console.log(`Server is running at ${process.env.PORT}`);
      });
    });
  });
}, 10000); // wait for 10sec before starting to ensure everything is up as docker v3 does not support depends_on
