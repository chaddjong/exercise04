const express = require("express");
const app = express();
const moment = require("moment/moment");
const data = require("./member");
const user = require("./user");

app.get("/", (req, res) => res.send("This is home"));
app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/json");
  res.send(
    JSON.stringify({
      status: "success",
      message: "response succes",
      description: "Exercise #03",
      date: moment().format(),
      data: data,
    })
  );
});
app.get("/user", (req, res) => {
  res.setHeader("Content-Type", "text/json");
  res.send(JSON.stringify(user));
});

const hostname = "localhost";
const port = 4000;
app.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}`)
);
