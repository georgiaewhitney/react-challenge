import { useState } from "react";

function Shouter() {
  // useState hook used to create a state variable (input) and func (setInput) to update value
  const [inputValue, setInputValue] = useState("");
  // event handler function is defined to handle onChange event of input element
  const handleChange = (e) => {
    // func sets new value using 'setinput'
    setInputValue(e.target.value);
  };
  // component then renders <input> and <output> elements with input value displayed in both
  return (
    // react.fragment groups a list of children without adding extra nodes ot the DOM
    // can be shortened to <>...</>
    <>
      <input value={inputValue} onChange={handleChange} />
      <output>{inputValue.toUpperCase()}</output>
    </>
  )
}

export default Shouter;