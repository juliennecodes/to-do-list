#With react testing library, you're just working with DOM nodes so it's HTML, you don't need to think about react
- check the dom nodes to see if the correct things are in the correct places
- ^ from what is react testing library? youtube video

#test child components if the child components has some logic, otherwise, test the parent since everything the parent does, covers the child hundred percent
  - ^ from Should you test child components or parent components? Or both?
  - ^ if the child had some state it was managing or some special logic - what other special logic
  - higher level components will test the happy path
  - as you dive further down, you have sad path things

#A unit doesn't have to be a unit of code - it's a behaviour.
  - from youtube comment

#Note: A user can be the end-user of the application but it can also be another developer who uses a component you developed. Let's say you implemented an image gallery that's used by other developers of your team. You should test that it behaves correctly when props change for example.
  -from https://jkettmann.com/beginners-guide-to-testing-react/
