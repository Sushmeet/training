import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me Sushi</h1>
      <SearchParams />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
