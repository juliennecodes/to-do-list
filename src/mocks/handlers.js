import { rest } from "msw";
//rest namespace groups essentials needed for mocking a rest api
import { setupServer } from "msw/node";

let tasks = [];

export const server = setupServer(
  rest.get("/tasks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tasks));
  }),

  rest.post("/tasks", (req, res, ctx) => {
    tasks = [...tasks, req.body.task];
    return res(ctx.status(200), ctx.json(tasks));
  }),

  rest.delete("/delete-task", (req, res, ctx) => {
    const task = req.body.finishedTask;
    tasks = tasks.filter((x) => x !== task);
    return res(ctx.status(200), ctx.json(tasks));
  })
);

export function clearTasks() {
  tasks = [];
}