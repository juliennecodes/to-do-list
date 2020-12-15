const express = require("express");
const app = express();

//------------------------------------------------------------------------------
let tasks = [];
//------------------------------------------------------------------------------
app.use(express.json());

app.get("/tasks", (req, res) => {
  //return list tasks
  res.json(tasks);
});

app.listen(8000, () => console.log("Listening on port 8000"));
