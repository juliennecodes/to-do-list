import {useState, useEffect} from 'react';
import {Tasks} from './components/Tasks';
import {Textbox} from './components/Textbox';

function App({writeTask}) {
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

  const updateTasks = async()=>{
    const updatedTasks = await writeTask(task);
    setTask(updatedTasks);
  };
  //writeTask - production code, takes fetch and res.json() and wrapping those up
  //in test code, faking all of that, jump straight to result without doing any
  // sort of fetch, instead of going to server, I know what server is going to
  // return, so I will just resolve a promise to the thing that I want, don't
  // need a fake server, result is just there because I said it was there

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
    .then(updatedTasks => setTasks(updatedTasks));
  };

  return (
    <div className = "to-do-list">
      <Tasks tasks={tasks} finishTask ={finishTask}/>
      <Textbox tasks = {tasks} setTask={setTask} updateTasks={updateTasks}/>
    </div>
  );
}

export default App;
