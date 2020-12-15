import {Task} from './Task';
export function Tasks({tasks}){
  return (
    <ul className="title">
    Manageable to do list
      {
        tasks.map(task => {
          return <Task task={task}/>
        })
      }
    </ul>
  )
};
