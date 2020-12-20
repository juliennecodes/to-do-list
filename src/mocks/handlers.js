import {rest} from 'msw';
//rest namespace groups essentials needed for mocking a rest api
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post("/tasks", (req, res, ctx) => {
    const task = req.body.task;
    return res(
      ctx.status(200),
      ctx.json(
        [task]
      )
    )
  }),
);

export {server};
