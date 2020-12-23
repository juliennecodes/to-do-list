Issues
# when refreshing the page, the tasks disappear despite there being existing tasks in the server side
    - I used a get request but that takes some time and the component renders before the information is available

# the textbox and button are disabled once it reaches five but when you refresh and there are no tasks, you can add more, thus exceeding the limit
    - textbox and button are disabled but when there is seemingly no tasks present, even if there are in server, you can continue to use the textbox and push more tasks in the server, when you fetch the tasks, there are more than the limit

^Solution - persist the data by storing data in the local storage. When you hit refresh, app renders, after everything renders, useEffect kicks in. It looks at the local storage for a previous state, if it exists, set the previous state as current state

#I want to just press enter and that will do the same thing as pressing the button does
^Solution - add event handler for when enter is pressed while text box is active, when it is pressed, make as if the button is pressed, I suppose if you have access to the function that the button triggers, just do that. In this case, however, the function is inside the App function so it's not available globally


#I think there is still a problem with writing more than five tasks. Disabling the textbox and button prevents it but I think manually writing the code in the console still permits it. Do I fix that issue in the client or the server?
- server issue
- connected to rest api, behaviour or server
- if post to server, right now, post returns list of tasks, might say, when you post to server, it total number of tasks is >= 5 200 ok
- if result is 6 or more, respond with error code or in other cases -> take oldest task
- shouldn't rely on GUI (client side) to make sure data doesn't get ruined in server
- integrity of application shouldn't depend on interface will save me, interface can be swapped, that aspect of GUI preventing problem, means that you have fundamental rules of application residing in something that is really cosmetic choice - too much responsibility for cosmetic choice - out of your depth

#GUI
- graphical user interface
- thing that user sees and can interact with
- when you type things in terminal, that is user interface
- GUI has graphical widgets that can be interacted with

#move helper functions from the server to their own dedicated file?

# how do you test components whose results show up in another component? i.e textbox action and task result - Do you go and test the common ancestral component, App?
^ test higher level

#You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked. Why use jest.fn() then? What use is a function that returns undefined?
- testing libraries will allow you to create test doubles, replace real code with something entirely under test control
- one flavour ^ mocks - doesn't have to do anything, just care that somebody interacted with it
- i.e

#Find out more about options object, namely name option

#what's rest api?
- endpoints, what server says it can do
- what you can do

#"not much use in testing small components unless there are interesting logic. Otherwise, just test higher level components", what other logic are there besides conditional logic? what's logic?

#api
- application programming interface
- what you can do, what you can talk to
- what the server puts forward - in web, what are your endpoints,
- how do I use the thing, what is the instruction book of this application
- i.e react api documentation - instruction book for react, in terms of library, what you can do with inputs and outputs
- api - general idea - rest api - type of but not only api that exists

#fetch issue
- production build -  fetch and res.json conflated and pass that in so that you can mock that conflated thing with the promise resolved already in test
- dependency - 
