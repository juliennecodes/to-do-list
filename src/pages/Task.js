export function Task({task, finishTask}){
  return (
    <li onClick={(e)=> finishTask(e.target.textContent)} className="task">
      {task}
    </li>
  );
}
