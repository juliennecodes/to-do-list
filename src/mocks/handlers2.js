import {rest} from 'msw';
//rest namespace groups essentials needed for mocking a rest api
import { setupServer } from 'msw/node';

let tasks = [];

const server = setupServer(
  rest.get("/tasks", (req, res, ctx) => {
    console.log(`get request tasks is ${tasks}`);
    return res(ctx.json(tasks));
  }),

  rest.post("/tasks", (req, res, ctx) => {
    const task = req.body.task;
    addToTasksList(task);
    console.log(`post request tasks is ${tasks}`);
    return res(ctx.json(tasks));
  }),

  rest.delete("/delete-task", (req, res, ctx)=> {
    const finishedTask = req.body.finishedTask;
    deleteTask(finishedTask);
    console.log(`delete request tasks is ${tasks}`);
    return res(ctx.json(tasks));
  }),
);

export {server};

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
