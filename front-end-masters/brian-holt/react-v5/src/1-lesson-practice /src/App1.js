// first thing to do is make your own component.
const App = () => {
  return React.createElement("div", null, [
    React.createElement("h1", null, "Hello from React JSX"),
    React.createElement("h1", null, "Hello from React JSX2"),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
