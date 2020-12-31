import {rest} from 'msw';
//rest namespace groups essentials needed for mocking a rest api
import { setupServer } from 'msw/node';

let tasks = [];

const server = setupServer(
  rest.get("/tasks", (req, res, ctx) => {
    console.log(`get request tasks is ${tasks}`);
    return res(
      ctx.status(200),
      ctx.json(tasks)
    )
  }),

  rest.post("/tasks", (req, res, ctx) => {
    const task = req.body.task;
    const updatedTasks = [...tasks, task];
    tasks = updatedTasks;
    console.log(`post request tasks is ${updatedTasks}`);

    return res(
      ctx.status(200),
      ctx.json(tasks)
    )
  }),

  rest.delete("/delete-task", (req, res, ctx)=> {
    const task = req.body.finishedTask;
    const updatedTasks = tasks.filter(x => x !== task);
    tasks = updatedTasks;
    console.log(`delete request tasks is ${updatedTasks}`);
    return res(
      ctx.status(200),
      ctx.json(tasks)
    )
  }),

  rest.get("/cleanup", (req, res, ctx) => {
    tasks = [];
    return res(
      ctx.json(200)
    )
  }),
);

export {server};
