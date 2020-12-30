import { render, screen, fireEvent, waitFor, waitForDomChange, waitForElementToBeRemoved} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import {server} from './mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
