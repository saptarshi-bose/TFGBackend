const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const indexrts = require("./routes/index.router");

const app = express();
app.use(bodyParser.json()); // registering this middleware for accepting json requests

app.use("/api", indexrts); // All route must precees with this path

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
