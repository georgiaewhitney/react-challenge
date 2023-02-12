import { useState } from "react";

function Shouter() {
  // useState hook used to create a state variable [input] and function [setinput] to update value
  const [input, setInput] = useState("");
  // event handler function is defined to handle onChange event of input element
  const handleChange = (e) => {
    // func sets new value using 'setinput'
    setInput(e.target.value);
  };
  // component then renders <input> and <output> elements with input value displayed in both
  return (
    // react.fragment groups a list of children without adding extra nodes ot the DOM
    // can be shortened to <>...</>
    <>
      <input value={input} onChange={handleChange} />
      <output>{input.toUpperCase()}</output>
    </>
  )
}

export default Shouter;