/*
Example 4 of 4: Form (two variables)
You can declare more than one state variable in the same component. 
Each state variable is completely independent.
*/
import { useState } from "react";

const Example4 = () => {
  const [text, setText] = useState("Taylor");
  const [age, setAge] = useState(42);
  const handleTextChange = (e) => setText(e.target.value);
  const incrementAge = () => setAge(age + 1);
  return (
    <div style={{ marginLeft: "20px" }}>
      <input
        type={text}
        onChange={handleTextChange}
        value={text}
        style={{ marginTop: "20px" }}
      />
      <p>
        Hello {text}, you are {age}
      </p>
      <button onClick={incrementAge}>Increment Age Again</button>
    </div>
  );
};

export default Example4;
