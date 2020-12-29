import { useState, useEffect } from "react";
import { Tasks } from "./components/Tasks";
import { Textbox } from "./components/Textbox";

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const previousTasks = localStorage.getItem("serverTasks");
    if (previousTasks) {
      setTasks(JSON.parse(previousTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("serverTasks", JSON.stringify(tasks));
  }, [tasks]);

  const writeTask = async (task) => {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ task }),
    });
    setTasks(await response.json());
  };

  const finishTask = async (finishedTask) => {
    const response = await fetch("/delete-task", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ finishedTask }),
    });
    setTasks(await response.json());
  };

  // console.log("just testing if console log is being logged in npm test");

  return (
    <div className="to-do-list">
      <Tasks tasks={tasks} finishTask={finishTask} />
      <Textbox disabled={tasks.length >= 5} writeTask={writeTask} />
    </div>
  );
}
