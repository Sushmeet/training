import React from 'react';
import ReactDOM from 'react-dom';

const buttonText = () => {
  return 'Click On Me';
};

const App = () => {
  const labelText = 'Enter Name';
  return (
    <div>
      <h1>Well hello from react again</h1>
      <form>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input type="text" id="name" placeholder="Enter Name" />
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          {buttonText()}
        </button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
