export function Textbox({tasks, setTask, updateTasks}){
  return (
    <>
    {
      tasks.length < 5 ?
      <div className="textbox">
        <input onChange={(e)=> setTask(e.target.value)} type="text"></input>
        <button onClick={updateTasks} type="button" name="button">Post</button>
      </div>
      :
      <div className="textbox">
        <input disabled type="text"></input>
        <button disabled type="button" name="button">Post</button>
      </div>
    }
    </>
  );
};
