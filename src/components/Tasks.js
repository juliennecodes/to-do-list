import {Task} from './Task';
export function Tasks({tasks, finishTask}){
  return (
    <ul className="title">
    Manageable to do list
      {
        tasks.map((task, index) =>
          <Task
            key = {index}
            task={task}
            finishTask={finishTask}
          />
        )
      }
    </ul>
  )
};
