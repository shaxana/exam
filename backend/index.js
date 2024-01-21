const express = require("express");
require("dotenv").config();
require("./config/db");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router/productRouter");
const cors = require("cors");
const port = process.env.PORT;
app.use(cors());

app.use(bodyParser.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
