Issues
# when refreshing the page, the tasks disappear despite there being existing tasks in the server side
    - I used a get request but that takes some time and the component renders before the information is available

# the textbox and button are disabled once it reaches five but when you refresh and there are no tasks, you can add more, thus exceeding the limit
    - textbox and button are disabled but when there is seemingly no tasks present, even if there are in server, you can continue to use the textbox and push more tasks in the server, when you fetch the tasks, there are more than the limit

^Solution - persist the data by storing data in the local storage. When you hit refresh, app renders, after everything renders, useEffect kicks in. It looks at the local storage for a previous state, if it exists, set the previous state as current state

#I want to just press enter and that will do the same thing as pressing the button does
^Solution - add event handler for when enter is pressed while text box is active, when it is pressed, make as if the button is pressed, I suppose if you have access to the function that the button triggers, just do that. In this case, however, the function is inside the App function so it's not available globally


#I think there is still a problem with writing more than five tasks. Disabling the textbox and button prevents it but I think manually writing the code in the console still permits it. Do I fix that issue in the client or the server?

#move helper functions from the server to their own dedicated file?

# how do you test components whose results show up in another component? i.e textbox action and task result - Do you go and test the common ancestral component, App?

#You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked. Why use jest.fn() then? What use is a function that returns undefined?

#Find out more about options object, namely name option

#what's rest api?

#"not much use in testing small components unless there are interesting logic. Otherwise, just test higher level components", what other logic are there besides conditional logic? what's logic?
