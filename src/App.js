import {useState, useEffect} from 'react';
import {Tasks} from './components/Tasks';
import {Textbox} from './components/Textbox';

function App() {
  const[task, setTask] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    document.querySelector("input").value = null;
  }, [tasks]);

  useEffect(()=>{
    const previousTasks = localStorage.getItem('serverTasks');
    if(previousTasks){
      setTasks(JSON.parse(previousTasks ))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem('serverTasks', JSON.stringify(tasks))
  }, [tasks]);

  const writeTask = async()=>{
    const response = await fetch("/tasks", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({task})
    });

    const updatedTasks = await response.json();

    setTasks(updatedTasks);
  };

  const finishTask = (finishedTask)=>{
    fetch("/delete-task", {
      method: "DELETE",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({finishedTask})
    })
    .then(res => res.json())
    .then(updatedTasks => {
      console.log("CLIENT SIDE DELETE REQUEST");
      setTasks(updatedTasks)})
      .catch(e => console.log(e));
  };

  // console.log("just testing if console log is being logged in npm test");

  return (
    <div className = "to-do-list">
      <Tasks tasks={tasks} finishTask ={finishTask}/>
      <Textbox tasks = {tasks} setTask={setTask} writeTask={writeTask}/>
    </div>
  );
}

export default App;
