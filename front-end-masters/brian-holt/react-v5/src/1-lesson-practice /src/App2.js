const Pet = ({ name, age, animal }) => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, `name: ${name}`),
    React.createElement("h2", null, `age: ${age}`),
    React.createElement("h2", null, `animal: ${animal}`),
    React.createElement("br", null),
    React.createElement("br", null)
  );
};

const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      age: 2,
      animal: "dog",
    }),
    React.createElement(Pet, {
      name: "Sippa",
      age: 10,
      anomal: "dog",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
