const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World! sujon pramnik</h1>");
});
app.get("/about", (req, res) => {
  res.render("about");
});

// app.post("/contact", (req, res) => {
//   res.send(req.body);
// });
app.get("/contact", (req, res) => {
  res.send(req.hostname);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
