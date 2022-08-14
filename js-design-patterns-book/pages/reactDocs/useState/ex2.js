/*
Example 2 of 4: Text field (string)
In this example, the text state variable holds a string. 
When you type, handleChange reads the latest input value from the browser input DOM element, 
and calls setText to update the state. This allows you to display the current text below.
*/

import { useState } from "react";

const Example2 = () => {
  const [text, setText] = useState("hello");

  const handleChange = (e) => {
    console.log("event---", e);
    setText(e.target.value);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <input
        style={{ marginTop: "20px" }}
        value={text}
        onChange={handleChange}
      />
      <p style={{ marginTop: "10px" }}>You typed: {text}</p>
      <button style={{ marginTop: "0px" }} onClick={() => setText("hello")}>
        Reset
      </button>
    </div>
  );
};

export default Example2;
