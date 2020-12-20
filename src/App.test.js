import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
// import {Task} from './components/Task';
// import {Tasks} from './components/Tasks';
// import {Textbox} from './components/Textbox';
import {server} from './mocks/handlers';

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// User types tasks =>
// Tasks shows up

test('user types task in the text box and task shows up in the tasks component', async()=>{
  const {getByRole}= render(<App />);

  const testTextBox = getByRole('textbox');
  const testButton = getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  //post request happens here, server should be listening and sending back something, and then resolves the fetch request
  expect(testTextBox.value === "Hum a tune").toBeTruthy(); //just testing useEvent works
  expect(await screen.findByText(/Hum a tune/)).toBeInTheDocument();
  screen.debug(testTextBox);

});
