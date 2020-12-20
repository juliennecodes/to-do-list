import {rest} from 'msw';
//rest namespace groups essentials needed for mocking a rest api
import { setupServer } from 'msw/node';

const tasks = [];
const server = setupServer(
  // rest.post("/tasks", (req, res, ctx) => {
  //   const task = req.body.task;
  //   return res(
  //     ctx.status(200),
  //     ctx.json(
  //       [task]
  //     )
  //   )
  // }),

  rest.post("/tasks", (req, res, ctx) => {
    const task = req.body.task;
    tasks.push(task);
    // console.log(tasks);
    return res(
      ctx.status(200),
      ctx.json(
        tasks
      )
    )
  }),
  // rest.post("/fullTasks", (req, res, ctx) => {
  //   const dummyTask = "Sing a song";
  //   const task = req.body.task;
  //
  //   return res(
  //     ctx.status(200),
  //     ctx.json(
  //       [dummyTask, dummyTask, dummyTask, dummyTask, task]
  //     )
  //   )
  // }),
);

export {server};
