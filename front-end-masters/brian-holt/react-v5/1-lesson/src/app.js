// functional component.
// react api with which you communicate to react
// react dom to render the contents on the web browser
// react native to render the contents on the mobile device.

// const Car = require('./car')


const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]);
};

// causing issues
// const Car = ({ name, model }) => {
//   return (
//     <div>
//       <h1>what a nice car ${name}</h1>
//       <p>This model is ${model}</p>
//     </div>
//   );
// };

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement("h2", {}, "silly me"),
    React.createElement("p", {}, "this is a paragraph"),
    React.createElement(Pet, {
      name: "sparky",
      animal: "dog",
      breed: "boston terrier",
    }),
    React.createElement(Pet, {
      name: "jogo",
      animal: "parrot",
      breed: "bird",
    }),
    React.createElement(Pet, {
      name: "kobo",
      animal: "cat",
      breed: "something",
    }),
    // React.createElement(Car, {
    //   name: "Honda",
    //   model: "civic",
    // })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
