import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const input = document.querySelector("input");

input.addEventListener("keyup", (e)=>{
  if(e.keyCode === 13){
    document.querySelector("button").click();
  }
});
