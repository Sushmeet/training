/*
Example 3 of 4: Checkbox (boolean)
In this example, the liked state variable holds a boolean. 
When you click the input, setLiked updates the liked state 
variable with whether the browser checkbox input is checked. 
The liked variable is used to render the text below the checkbox.
*/

import { useState } from "react";

const Example3 = () => {
  const [like, setLike] = useState(true);
  const onChange = (syntheticEvent) => {
    console.log("syntevent---", syntheticEvent);
    setLike(syntheticEvent.target.checked);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>example3</h2>
      <input type="checkbox" checked={like} onChange={onChange}></input>
      <label>I like this</label>
      <p>You {like ? "liked" : "did not like"} this</p>
    </div>
  );
};

export default Example3;
