#Usage

User types tasks =>
Tasks shows up on the dotted lines

Situation: once five slots are filled, user can no longer type more tasks
User clicks on the text box to type another task =>
Message pops up saying, "You look like you have your plate full"

User clicks on the task =>
Task turns into stars

User clicks on the star icon =>
User is redirected to a page listing completed tasks

User clicks link to go back to list =>
User returns to to do list

#Usage and implementation
##
User types tasks =>
Tasks shows up on the dotted lines
- user types into textbox
- submit event happens, event handler makes a post request to server
- posted information pushes that information into an array of tasks
- server sends back json object, which contains the array information
- client receives json object, extracts the response body, and uses information from response body to set the state of the to do tasks
- tasks component maps through the tasks state and renders each one as a component
      - how do you signal there are three more slots to fill if there are only two things to map
      - brainstorm - loop n times, check length of tasks and subtract that to n, with n being 5 initially
      - brainstorm - static svg image
      - brainstorm - two types of component in task component, one is tasks, one is empty, therefore when you click on task, you can mark it as completed, whereas if you click on empty, nothing happens, check the length of tasks state, subtract it to n where it starts out as 5, for loop n times to create empty task slots, empty task slot has bottom dotted border
- if task state is less than 5, subtract length to n, resulting number is now the number of empty slots to be rendered
- if task state is equal to 5, don't render empty slot
- tasks component is now rendered with task component and/or empty slots

##
Situation: once five slots are filled, user can no longer type more tasks
User clicks on the text box to type another task =>
Message pops up saying, "You look like you have your plate full"
- user clicks on the text box
- if a user clicks on it, a message pops up, telling the user they have their plates full
  - brainstorm - create element, component? appended to...hmmm, maybe just span? and it disappears if you click anywhere in the document or automatically in five seconds

##
User clicks on the task =>
Task turns into stars
  - user clicks on task
  - task turns into stars
  - a delete request is made to the server
  - server receives delete request and deletes it from the tasks array, pushes task in finished array
  - server sends back amended tasks list
  - client receives tasks list and sets tasks state
  - this change in state triggers re-rendering of tasks component, which maps through tasks state
  - previous task component is now removed - I guess no simple way to replace that task component with dotted lines and have previous task retain their placement - at least not for a practice app
  - tasks component no longer has completed task

##
User clicks on the star icon =>
User is redirected to a page listing completed tasks
  - user clicks on the star icon
  - user is redirected to the completed tasks page
  - fetch get request for completed tasks array
  - get request to /completed path returns completed tasks array
  - server receives get request and sends back json object of finished array
  - client receives response and uses response body content to set state of completed tasks
  - completed tasks state used for rendering completed task component, which returns a paragraph element whose text content is the completed task


##
Situation: user is in accomplishments page
User clicks link to go back to list =>
User returns to to do list
  - navigating to that page amounts to get request to the server
  - server receives get requests and responds with a json object of tasks
