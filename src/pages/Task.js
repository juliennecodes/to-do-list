export function Task({task, finishTask}){
  return (
    <li onClick={(e)=> finishTask(e.target.textContent)} className="task">
      {task}
    </li>
  );
}

// <li onClick={(e)=> finishTask(e.target.value)} className="task">
//   {task}
// </li>

// <li onClick={(e)=> console.log(e.target.textContent)} className="task">
//   {task}
// </li>
