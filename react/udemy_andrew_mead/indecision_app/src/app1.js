console.log("App.js is running!");
//Architecture
// Declared 3 functions
// Declared 3 buttons
// Just render it.

let count = 0;
const appRoot = document.getElementById("app");

const addOne = () => {
  console.log('addone')
  count ++;
  callbambi();
} ;
const minusOne = () => {
  console.log('minus one');
  count --;
  callbambi();
}
const reset = () => {
  console.log('reset');
  count =0;
  callbambi();
}


const callbambi = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>Button</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

callbambi();

