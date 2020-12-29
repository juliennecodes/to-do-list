import { useState } from "react";

export function Textbox({ disabled, writeTask }) {
  const [task, setTask] = useState("");

  return (
    <div className="textbox">
      <input
        disabled={disabled}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button
        disabled={disabled}
        onClick={() => {
          writeTask(task);
          setTask("");
        }}
        type="button"
      >
        Post
      </button>
    </div>
  );
}

//if testing textbox in isolation, what you want to say about it, when you click
//button, write task gets called, clicking button calls function, doesn't matter
//what write task does
//jest function comes in as mock, thing you can validate,
//pass it in as writeTask
//test toHaveBeenCalled
//mock functions - don't care what they do, just know they are invoked

//everything passed in i.e tasks - dependencies of this component
//dependencies, things that this component needs to do its job
//generally components are easier to test, compose together, if all of their dependencies are clear and defined at top level
//if using mycontext, dependencies in context object - harder to know what textbox actuallly needs, without looking inside what is
//unpacked in context - makes it diffiucult to use in other circumstances because you don't know what kind of set up you need to use
//to get it to behave
//if function only depends on its input, really easy to test
//can test that and reason about that
//if function took a and b but c is from local state, not reusable because c is imported from somwhere
//try to make sure dependency is explicit - makes it easier to test, more dependable
//in react chose not to expost, fetch is happening, rather, in test, mash in different version of fetch and deal with it that way

//follow react testing recipe
