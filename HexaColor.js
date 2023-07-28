const express = require("express");

const app = express();

app.use(express.json());

const colors = require("./colors_ou27qd.json");

app.get("/send-a-color", (req, res) => {
  const color = colors[req.query.color];
  console.log(req.query);
  if (colors) {
    res.json({
      color: req.query.color,
      hexa: color,
    });
  } else {
    res.json({ message: "color not found" });
  }
});

app.all("*", (req, res) => {
  res.json({ message: "server not working" });
});

app.listen(3000, () => {
  console.log("server launched");
});
