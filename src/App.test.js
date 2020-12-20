import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
// import {Task} from './components/Task';
// import {Tasks} from './components/Tasks';
// import {Textbox} from './components/Textbox';
import {server} from './mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
// beforeEach(()=>
// //unmount rendered app
// );
// afterEach(()=> window.localStorage.removeItem('serverTasks'));



// User types tasks =>
// Tasks shows up

test('user types task in the text box and task shows up in the tasks component', async()=>{
  const {getByRole}= render(<App writeTask= {(task)=>{
    return Promise.resolve(["Hum a tune"])
  }}
  />);

  const testTextBox = getByRole('textbox');
  const testButton = getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  expect(testTextBox.value === "Hum a tune").toBeTruthy(); //just testing useEvent works
  expect(await screen.findByText(/Hum a tune/)).toBeInTheDocument();
  screen.debug();
});

// User clicks on the text box to type another task =>
// Textbox and button gets disabled

// test('user types in the fifth task and textbox and button gets disabled', async()=> {
//   const {getByRole}= render(<App />);
//
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//
//   submitTaskFiveTimes("Hum a tune", testTextBox, testButton);
//   screen.debug();
//   expect(testButton).toBeDisabled();
//
// });
// function submitTaskFiveTimes(task, textbox, button){
//   for(let i = 0; i < 5; i++){
//     userEvent.type(textbox, task);
//     userEvent.click(button);
//   };
// };

test('user types in the fifth task and textbox and button gets disabled', async()=> {
  const {getByRole}= render(<App writeTask= {(task)=>{
    fetch("/tasks", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({task})
    })
    .then(res => res.json())
  }}
  />);

  const testTextBox = getByRole('textbox');
  const testButton = getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  expect(testButton).toBeDisabled();

});
