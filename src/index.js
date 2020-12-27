import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App writeTask= {(task)=>{
      fetch("/tasks", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({task})
      })
      .then(res => res.json())
    }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

const input = document.querySelector("input");

input.addEventListener("keyup", (e)=>{
  if(e.keyCode === 13){
    document.querySelector("button").click();
  }
});
