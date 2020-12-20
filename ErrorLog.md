import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';
import {Task} from './components/Task';
import {Tasks} from './components/Tasks';
import {Textbox} from './components/Textbox';

// User types tasks =>
// Tasks shows up

test('user types task in the text box and task shows up in the tasks component', ()=>{
  const {getByRole}= render(<App />);

  const testTextBox = getByRole('textbox');
  const testButton = getByRole('button');

  userEvent.type(testTextBox, "Hum a tune");
  userEvent.click(testButton);
  expect(screen.getByText).toBeInTheDocument();

});

##Current problem
TypeError: Cannot read property 'type' of undefined
