import { useState } from "react";
import React from "react";


function Shouter() {
  // useState hook used to create a state variable (input) and func (setInput) to update value
  // variables within array
  const [inputValue, setInputValue] = useState("");
  // event handler function is defined to handle onChange event of input element
  const handleChange = (e) => {
    // func sets new value using 'setInput'
    setInputValue(e.target.value);
  };
  // component then renders <input> and <output> elements with input value displayed in both
  return (
    // react.fragment groups a list of children without adding extra nodes to the DOM
    // can be shortened to <>...</>
    // <React.Fragment> requires react import (.l2)
    // <Fragment> can be used with Fragment imported
    <React.Fragment>
      <input value={inputValue} onChange={handleChange} />
      <output>{inputValue.toUpperCase()}</output>
    </React.Fragment>
  )
}

export default Shouter;

/*
The handleChange function is called in the input because it is used to handle the onChange event. The onChange event is triggered whenever the value of the input element changes, which can happen when a user types into the input field.

The handleChange function takes an event object e as an argument and uses it to get the current value of the input field by accessing e.target.value. The current value is then passed to setInputValue, which updates the value of the state variable inputValue.

In this example, handleChange is passed as the onChange prop to the input element, which means that it will be called every time the input value changes. This allows the component to react to changes in the input and update the output accordingly.
*/