#Usage

User types tasks =>
Tasks shows up

Situation: once five tasks are written, user can no longer type more tasks
User clicks on the text box to type another task =>
Textbox and button gets disabled

User clicks on the task =>
Task disappears

#Usage and implementation
##
User types tasks =>
Tasks shows up
- user types into textbox
- submit event happens, event handler makes a post request to server
- posted information pushes that information into an array of tasks
- server sends back json object, which contains the array information
- client receives json object, extracts the response body, and uses information from response body to set the state of the to do tasks
- tasks component maps through the tasks state and renders each one as a component

##
Situation: once five tasks are written, user can no longer type more tasks
User clicks on the text box to type another task =>
Textbox and button gets disabled

##
User clicks on the task =>
Task disappears
  - user clicks on task
  - clicked task triggers a delete request to the server
  - server receives delete request and deletes task from the tasks array
  - server sends back amended tasks list
  - client receives tasks list and sets tasks state
  - this change in state triggers re-rendering of tasks component, which maps through tasks state
  - previous task component is now removed
  - tasks component no longer has completed task
