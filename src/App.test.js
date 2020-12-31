import { render, screen, fireEvent, waitFor, waitForDomChange, waitForElementToBeRemoved} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import {server} from './mocks/handlers';


beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  fetch("/cleanup")
  .then(res => res.json())
  .then(resBody => console.log(resBody));
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})

//------------------------------------------------------------------------------
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test('user types task in the text box and task shows up in the tasks component', async()=>{
  render(<App />);

  const testTextBox = screen.getByRole('textbox');
  const testButton = screen.getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  expect(testTextBox.value === "Hum a tune").toBeTruthy(); //just testing useEvent works
  expect(await screen.findByText(/Hum a tune/)).toBeInTheDocument();
  // expect(await screen.findByText(/Eat a cake/)).toBeInTheDocument(); //test fail case
});

//------------------------------------------------------------------------------
test('user clicks on the task and task disappears', async() =>{
  render(<App />);
  const testTextBox = screen.getByRole('textbox');
  const testButton = screen.getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  // await waitForDomChange();
  //waitForDomChange works but it is deprecated
  //advice was to wait for something specific in the DOM
  await waitFor(() => screen.findByText(/Hum a tune/));
  //this is to make sure that the textbox clears itself before the next task is typed

  userEvent.type(testTextBox, "Sing a song");
  userEvent.click(testButton);

  const task =  await screen.findByText(/Sing a song/);
  expect(task).toBeInTheDocument();
  // fireEvent.click(task);
  userEvent.click(task);
  await waitForElementToBeRemoved(()=> screen.getByText(/Sing a song/));


  screen.debug();
  expect(screen.queryByText(/Sing a song/)).not.toBeInTheDocument();
});
//------------------------------------------------------------------------------
test('textbox and button is disabled after five tasks are typed', async()=>{
  render(<App />);
  const testTextBox = screen.getByRole('textbox');
  const testButton = screen.getByRole('button');

  userEvent.type(testTextBox, "Eat an orange");
  userEvent.click(testButton);
  await waitFor(()=> screen.findByText(/Eat an orange/));

  userEvent.type(testTextBox, "Drink tea");
  userEvent.click(testButton);
  await waitFor(()=> screen.findByText(/Drink tea/));

  userEvent.type(testTextBox, "Bake sweet potato");
  userEvent.click(testButton);
  await waitFor(()=> screen.findByText(/Bake sweet potato/));

  userEvent.type(testTextBox, "Hydrate with water");
  userEvent.click(testButton);
  await waitFor(()=> screen.findByText(/Hydrate with water/));


  userEvent.type(testTextBox, "Take a nap");
  userEvent.click(testButton);
  await waitFor(()=> screen.findByText(/Take a nap/));

  screen.debug();
  expect(testTextBox).toBeDisabled();
  expect(testButton).toBeDisabled();
});

// async function typeFiveTasks(textbox, button){
//   userEvent.type(textbox, "Eat an orange");
//   userEvent.click(button);
//   await waitFor(()=> screen.findByText(/Eat an orange/));
//
//   userEvent.type(textbox, "Drink tea");
//   userEvent.click(button);
//   await waitFor(()=> screen.findByText(/Drink tea/));
//
//   userEvent.type(textbox, "Bake sweet potato");
//   userEvent.click(button);
//   await waitFor(()=> screen.findByText(/Bake sweet potato/));
//
//   userEvent.type(textbox, "Hydrate with water");
//   userEvent.click(button);
//   await waitFor(()=> screen.findByText(/Hydrate with water/));
//
//
//   userEvent.type(textbox, "Take a nap");
//   userEvent.click(button);
//   await waitFor(()=> screen.findByText(/Take a nap/));
// }
