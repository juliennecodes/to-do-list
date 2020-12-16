const express = require("express");
const app = express();

//------------------------------------------------------------------------------
let tasks = [];
//------------------------------------------------------------------------------
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res)=>{
  const task = req.body.task;
  addToTasksList(task);
  res.json(tasks);
});

app.delete("/delete-task", (req, res)=>{
  const finishedTask = req.body.finishedTask;
  deleteTask(finishedTask);
  res.json(tasks);
});

app.listen(8000, () => console.log("Listening on port 8000"));

function addToTasksList(task){
  const updatedTasks = [...tasks, task];
  tasks = updatedTasks;
  return tasks;
};

function deleteTask(finishedTask){
  const updatedTasks = tasks.filter(task => task !== finishedTask);
  tasks = updatedTasks;
  return tasks;
};
