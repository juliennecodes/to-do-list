import {useState, useEffect} from 'react';
import {Tasks} from './pages/Tasks';
import {Textbox} from './pages/Textbox';

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
  //this looks into local storage
  //you provide the name of the thing you're looking for
  //assign it to a binding
  //if the thing you're looking for exists, set it as the value for your the state that you want to persist

  useEffect(()=>{
    localStorage.setItem('serverTasks', JSON.stringify(tasks))
  }, [tasks]);
  //this keeps things in local storage
  //first argument is what you name what you're keeping
  //second argument is the thing you're keeping
  //local storage only accepts strings

  const writeTask = ()=>{
    fetch("/tasks", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({task})
    })
    .then(res => res.json())
    .then(updatedTasks => setTasks(updatedTasks));
  };


  const finishTask = (finishedTask)=>{
    fetch("/delete-task", {
      method: "DELETE",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({finishedTask})
    })
    .then(res => res.json())
    .then(updatedTasks => setTasks(updatedTasks));
  };

  return (
    <div className = "to-do-list">
      <Tasks tasks={tasks} finishTask ={finishTask}/>
      <Textbox tasks = {tasks} setTask={setTask} writeTask={writeTask}/>
    </div>
  );
}

export default App;
