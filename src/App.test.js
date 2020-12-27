import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
// import {server} from './mocks/handlers';
//
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// test('user types task in the text box and task shows up in the tasks component', async()=>{
//   const {getByRole}= render(<App />);
//
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//
//   userEvent.type(testTextBox, "Hum a tune");
//   userEvent.click(testButton);
//   expect(testTextBox.value === "Hum a tune").toBeTruthy(); //just testing useEvent works
//   expect(await screen.findByText(/Hum a tune/)).toBeInTheDocument();
//   screen.debug();
//
// });
//------------------------------------------------------------------------------
test('user types task in the text box and task shows up in the tasks component', async()=>{
  const mockTasks = ["Hum a tune"];
  //this is what you want the server to send back
  //this is the processed data

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({json: () => Promise.resolve(mockTasks)})
  );
  //so on a fetch request, this will be sent in place of server response

  const {getByRole, unmount}= render(<App />);
  const testTextBox = getByRole('textbox');
  const testButton = getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  expect(await screen.findByText(/Hum a tune/)).toBeInTheDocument();
  screen.debug();

  // expect(await screen.findByText(/Watch a movie/)).toBeInTheDocument();
  //test fail case

  global.fetch.mockRestore();
  unmount();
});

//------------------------------------------------------------------------------
// test('user clicks on the task and task disappears', async() =>{
//   const {getByRole, findByText}= render(<App />);
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   const task =  await findByText(/Sing a song/);
//   expect(task).toBeInTheDocument();
//   userEvent.click(task);
//   screen.debug();
//
//
//   expect(await findByText(/Sing a song/)).not.toBeInTheDocument();
// });
//this definitely works in the app, I checked the DOM in the developer tools
//is the test failing because I don't know how to write it?
//is the test failing because of the server?
//is it the clicking of the task?

//------------------------------------------------------------------------------
// test('user clicks on the task and task disappears', async() =>{
//   const {getByRole, getByText, findByText}= render(<App />);
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   expect(await findByText(/Sing a song/)).toBeInTheDocument();
//   userEvent.click(getByText(/Sing a song/));
//   screen.debug();
//
//
//   expect(getByText(/Sing a song/)).not.toBeInTheDocument();
// });

//------------------------------------------------------------------------------
// test('user types five tasks and button gets disabled', async() =>{
//   const {getByRole}= render(<App />);
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   screen.debug();
//
//   expect(testButton).toBeDisabled();
// });
//why isn't the textbox clearing?
//isn't this like a rendered element
//if so, shouldn't it be typing, sending fetch request, and then re-rendering as a result of the fetch request
//or is it because of that, that the fetch requests are being made before they're fulfilled?
//so the textbox doesn't get cleared before the next fetch request is made?

//------------------------------------------------------------------------------
// test('user types five tasks and button gets disabled', async() =>{
//   const {getByRole}= render(<App />);
//   const testTextBox = getByRole('textbox');
//   const testButton = getByRole('button');
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   userEvent.type(testTextBox, "Sing a song");
//   userEvent.click(testButton);
//
//   screen.debug();
//
//   expect(testButton).toBeDisabled();
// });
//how do you hijack the fetch in this case?
//you have a fetch that posts as well as fetch that deletes
//how does spyOn know which fetch to replace with a mock?
//I have to tailor the mock depending on whether it is a post request or a delete request
