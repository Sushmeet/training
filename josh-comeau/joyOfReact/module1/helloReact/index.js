// Can't use import in the browser so no need for them, look how i run it below
// import react dependencies
// import { createRoot } from "react-dom/client";

const element = React.createElement("p", {
  id: "hello",
  children: "Hello world Sushi",
});

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(element);
