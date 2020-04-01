const express = require("express");
const setUpDB = require("./config/database");
const router = require("./config/routes");
const app = express();
const port = 3049;

app.use(express.json());
app.use("/", router);
setUpDB();

app.listen(port, () => {
  console.log("listening on port", port);
});
