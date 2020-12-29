export function Task({ task, finishTask }) {
  return (
    <li onClick={(e) => finishTask(e.target.textContent)} className="task">
      {task}
    </li>
  );
}

// <li onClick={(e)=> finishTask(e.target.textContent)} className="task">
//   {task}
// </li>

// <li onClick={(e)=> {
//   console.log("I've been clicked");
//   finishTask(e.target.textContent);}
// } className="task">
//   {task}
// </li>
//
